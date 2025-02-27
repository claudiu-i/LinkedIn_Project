// controllers/participantController.js
const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const store = require('../store');

// @desc    Get all participants in a room
// @route   GET /api/rooms/:roomId/participants
// @access  Private
const getRoomParticipants = asyncHandler(async (req, res) => {
  const { roomId } = req.params;
  const { status } = req.query;

  // Check if room exists
  const room = store.getRoom(roomId);

  if (!room) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Room not found'
    });
  }

  // Get participants
  let participants = store.getAllParticipantsByRoom(roomId);
  
  // Filter by status if specified
  if (status) {
    participants = participants.filter(p => p.status === status);
  }
  
  // Sort by role and join time
  participants.sort((a, b) => {
    // Sort by role first (host, speaker, listener)
    const roleOrder = { host: 1, speaker: 2, listener: 3 };
    if (roleOrder[a.role] !== roleOrder[b.role]) {
      return roleOrder[a.role] - roleOrder[b.role];
    }
    
    // Then by join time
    return new Date(a.joinedAt) - new Date(b.joinedAt);
  });

  res.status(StatusCodes.OK).json({
    success: true,
    data: participants
  });
});

// @desc    Approve a participant to join the room
// @route   PUT /api/rooms/:roomId/participants/:participantId/approve
// @access  Private (Host only)
const approveParticipant = asyncHandler(async (req, res) => {
  const { roomId, participantId } = req.params;

  // Check if room exists
  const room = store.getRoom(roomId);

  if (!room) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Room not found'
    });
  }

  // Check if user is host
  const isHost = store.getAllParticipantsByRoom(roomId).some(
    p => p.userId === req.user.id && p.role === 'host'
  );

  if (!isHost) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: 'Only hosts can approve participants'
    });
  }

  // Find participant
  const participant = store.getParticipant(participantId);

  if (!participant || participant.roomId !== roomId) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Participant not found'
    });
  }

  if (participant.status !== 'waiting') {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `Participant status is ${participant.status}. Can only approve waiting participants.`
    });
  }

  // Update participant
  const updatedParticipant = store.updateParticipant(participantId, {
    status: 'approved'
  });

  res.status(StatusCodes.OK).json({
    success: true,
    data: updatedParticipant
  });
});

// @desc    Reject a participant
// @route   PUT /api/rooms/:roomId/participants/:participantId/reject
// @access  Private (Host only)
const rejectParticipant = asyncHandler(async (req, res) => {
  const { roomId, participantId } = req.params;

  // Check if room exists
  const room = store.getRoom(roomId);

  if (!room) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Room not found'
    });
  }

  // Check if user is host
  const isHost = store.getAllParticipantsByRoom(roomId).some(
    p => p.userId === req.user.id && p.role === 'host'
  );

  if (!isHost) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: 'Only hosts can reject participants'
    });
  }

  // Find participant
  const participant = store.getParticipant(participantId);

  if (!participant || participant.roomId !== roomId) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Participant not found'
    });
  }

  // Update participant
  const updatedParticipant = store.updateParticipant(participantId, {
    status: 'rejected',
    leftAt: new Date().toISOString()
  });

  res.status(StatusCodes.OK).json({
    success: true,
    data: updatedParticipant
  });
});

// @desc    Change participant role
// @route   PUT /api/rooms/:roomId/participants/:participantId/role
// @access  Private (Host only)
const changeParticipantRole = asyncHandler(async (req, res) => {
  const { roomId, participantId } = req.params;
  const { role } = req.body;

  // Validate role
  if (!['host', 'speaker', 'listener'].includes(role)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Invalid role. Must be host, speaker, or listener.'
    });
  }

  // Check if room exists
  const room = store.getRoom(roomId);

  if (!room) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Room not found'
    });
  }

  // Check if user is host
  const isHost = store.getAllParticipantsByRoom(roomId).some(
    p => p.userId === req.user.id && p.role === 'host'
  );

  if (!isHost) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: 'Only hosts can change participant roles'
    });
  }

  // Find participant
  const participant = store.getParticipant(participantId);

  if (!participant || participant.roomId !== roomId) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Participant not found'
    });
  }

  // If changing to host, check if it's the room owner
  if (role === 'host' && room.ownerId !== participant.userId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Only the room owner can be assigned the host role'
    });
  }

  // Update participant role
  const updatedParticipant = store.updateParticipant(participantId, { role });

  res.status(StatusCodes.OK).json({
    success: true,
    data: updatedParticipant
  });
});

// @desc    Update participant media state (audio, video, screen share)
// @route   PUT /api/rooms/:roomId/participants/media
// @access  Private
const updateParticipantMedia = asyncHandler(async (req, res) => {
  const { roomId } = req.params;
  const { hasAudio, hasVideo, hasScreenShare } = req.body;

  // Find participant
  const participant = store.getParticipantByUserAndRoom(req.user.id, roomId);

  if (!participant || !['approved', 'active'].includes(participant.status)) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Participant not found or not approved'
    });
  }

  // Update media state
  const updates = {};
  
  if (hasAudio !== undefined) {
    updates.hasAudio = hasAudio;
  }
  
  if (hasVideo !== undefined) {
    updates.hasVideo = hasVideo;
  }
  
  if (hasScreenShare !== undefined) {
    updates.hasScreenShare = hasScreenShare;
  }

  const updatedParticipant = store.updateParticipant(participant.id, updates);

  res.status(StatusCodes.OK).json({
    success: true,
    data: updatedParticipant
  });
});

// @desc    Share resume with room
// @route   PUT /api/rooms/:roomId/participants/resume
// @access  Private
const shareResume = asyncHandler(async (req, res) => {
  const { roomId } = req.params;
  const { resumeUrl, resumeShared } = req.body;

  // Find participant
  const participant = store.getParticipantByUserAndRoom(req.user.id, roomId);

  if (!participant || !['approved', 'active'].includes(participant.status)) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Participant not found or not approved'
    });
  }

  // Update resume sharing
  const updatedParticipant = store.updateParticipant(participant.id, {
    resumeShared: resumeShared !== undefined ? resumeShared : true,
    resumeUrl: resumeUrl || participant.resumeUrl
  });

  res.status(StatusCodes.OK).json({
    success: true,
    data: updatedParticipant
  });
});

module.exports = {
  getRoomParticipants,
  approveParticipant,
  rejectParticipant,
  changeParticipantRole,
  updateParticipantMedia,
  shareResume
};