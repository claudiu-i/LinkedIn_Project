// controllers/roomController.js
const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const store = require('../store');

// @desc    Create a new room
// @route   POST /api/rooms
// @access  Private (Recruiters only)
const createRoom = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    isPrivate,
    accessCode,
    maxParticipants,
    startTime,
    endTime,
    restrictedToRegion,
    resumeFilters,
    enableVideo,
    enableAudio,
    enableChat,
    enableScreenShare,
    autoAdmit
  } = req.body;

  // Create room
  const room = store.createRoom({
    name,
    description,
    isPrivate,
    accessCode,
    maxParticipants,
    startTime,
    endTime,
    ownerId: req.user.id,
    ownerName: `${req.user.firstName} ${req.user.lastName}`,
    ownerEmail: req.user.email,
    ownerProfileImage: req.user.profileImage,
    restrictedToRegion,
    resumeFilters,
    enableVideo,
    enableAudio,
    enableChat,
    enableScreenShare,
    autoAdmit,
    status: 'scheduled'
  });

  // Add owner as host participant
  store.addParticipant({
    userId: req.user.id,
    roomId: room.id,
    name: `${req.user.firstName} ${req.user.lastName}`,
    email: req.user.email,
    profileImage: req.user.profileImage,
    role: 'host',
    status: 'approved'
  });

  res.status(StatusCodes.CREATED).json({
    success: true,
    data: room
  });
});

// @desc    Get all rooms (with filters)
// @route   GET /api/rooms
// @access  Public
const getRooms = asyncHandler(async (req, res) => {
  const {
    status = 'active',
    isPrivate = false,
    page = 1,
    limit = 10
  } = req.query;

  // Convert string to boolean
  const isPrivateBoolean = isPrivate === 'true';

  // Get rooms with filters
  const rooms = store.getAllRooms({
    status,
    isPrivate: isPrivateBoolean
  });

  // Basic pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedRooms = rooms.slice(startIndex, endIndex);

  // Pagination result
  const totalPages = Math.ceil(rooms.length / limit);
  
  res.status(StatusCodes.OK).json({
    success: true,
    data: paginatedRooms,
    pagination: {
      total: rooms.length,
      page: parseInt(page),
      totalPages,
      limit: parseInt(limit)
    }
  });
});

// @desc    Get a single room by ID
// @route   GET /api/rooms/:id
// @access  Private
const getRoomById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const room = store.getRoom(id);

  if (!room) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Room not found'
    });
  }

  // Get participants for this room
  const participants = store.getAllParticipantsByRoom(id);
  
  // Attach participants to room
  const roomWithParticipants = {
    ...room,
    participants
  };

  res.status(StatusCodes.OK).json({
    success: true,
    data: roomWithParticipants
  });
});

// @desc    Update a room
// @route   PUT /api/rooms/:id
// @access  Private (Room owner only)
const updateRoom = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const room = store.getRoom(id);

  if (!room) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Room not found'
    });
  }

  // Check ownership
  if (room.ownerId !== req.user.id) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: 'You are not authorized to update this room'
    });
  }

  // Update room
  const updatedRoom = store.updateRoom(id, req.body);

  res.status(StatusCodes.OK).json({
    success: true,
    data: updatedRoom
  });
});

// @desc    Delete a room
// @route   DELETE /api/rooms/:id
// @access  Private (Room owner only)
const deleteRoom = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const room = store.getRoom(id);

  if (!room) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Room not found'
    });
  }

  // Check ownership
  if (room.ownerId !== req.user.id) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: 'You are not authorized to delete this room'
    });
  }

  // Delete room (this will also delete associated participants)
  store.deleteRoom(id);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Room deleted successfully'
  });
});

// @desc    Join a room
// @route   POST /api/rooms/:id/join
// @access  Private
const joinRoom = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { accessCode } = req.body;

  const room = store.getRoom(id);

  if (!room) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Room not found'
    });
  }

  // Check if room is active
  if (room.status !== 'active') {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `Room is ${room.status}. You can only join active rooms.`
    });
  }

  // Check if room is full
  const participants = store.getAllParticipantsByRoom(id);
  const approvedParticipants = participants.filter(p => 
    p.status === 'approved' || p.status === 'active'
  );

  if (approvedParticipants.length >= room.maxParticipants) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Room is full'
    });
  }

  // Check access code if room is private
  if (room.isPrivate && room.accessCode !== accessCode) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: 'Invalid access code'
    });
  }

  // Check if user is already in the room
  let participant = store.getParticipantByUserAndRoom(req.user.id, id);

  if (participant) {
    // Update status if needed
    if (['left', 'rejected'].includes(participant.status)) {
      participant = store.updateParticipant(participant.id, {
        status: room.autoAdmit ? 'approved' : 'waiting',
        joinedAt: new Date().toISOString(),
        leftAt: null
      });
    }
  } else {
    // Create new participant
    participant = store.addParticipant({
      userId: req.user.id,
      roomId: id,
      name: `${req.user.firstName} ${req.user.lastName}`,
      email: req.user.email,
      profileImage: req.user.profileImage,
      role: room.ownerId === req.user.id ? 'host' : 'listener',
      status: room.autoAdmit ? 'approved' : 'waiting',
      hasAudio: false,
      hasVideo: false,
      hasScreenShare: false
    });
  }

  res.status(StatusCodes.OK).json({
    success: true,
    data: participant
  });
});

// @desc    Leave a room
// @route   POST /api/rooms/:id/leave
// @access  Private
const leaveRoom = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const participant = store.getParticipantByUserAndRoom(req.user.id, id);

  if (!participant) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Participant not found'
    });
  }

  // Update participant status
  store.updateParticipant(participant.id, {
    status: 'left',
    leftAt: new Date().toISOString(),
    hasAudio: false,
    hasVideo: false,
    hasScreenShare: false
  });

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Left room successfully'
  });
});

// @desc    Start a room (change status to active)
// @route   POST /api/rooms/:id/start
// @access  Private (Room owner only)
const startRoom = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const room = store.getRoom(id);

  if (!room) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Room not found'
    });
  }

  // Check ownership
  if (room.ownerId !== req.user.id) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: 'You are not authorized to start this room'
    });
  }

  // Update room status
  const updatedRoom = store.updateRoom(id, {
    status: 'active',
    startTime: new Date().toISOString()
  });

  res.status(StatusCodes.OK).json({
    success: true,
    data: updatedRoom
  });
});

// @desc    End a room (change status to ended)
// @route   POST /api/rooms/:id/end
// @access  Private (Room owner only)
const endRoom = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const room = store.getRoom(id);

  if (!room) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Room not found'
    });
  }

  // Check ownership
  if (room.ownerId !== req.user.id) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: 'You are not authorized to end this room'
    });
  }

  // Update room status
  const updatedRoom = store.updateRoom(id, {
    status: 'ended',
    endTime: new Date().toISOString()
  });

  res.status(StatusCodes.OK).json({
    success: true,
    data: updatedRoom
  });
});

module.exports = {
  createRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
  joinRoom,
  leaveRoom,
  startRoom,
  endRoom
};