// websocket/index.js
const socketIO = require('socket.io');
const { verifyToken } = require('../config/clerk');
const store = require('../store');

// Initialize Socket.IO server
function setupWebSocketServer(server) {
  const io = socketIO(server, {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:3000',
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  // Authentication middleware for Socket.IO
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      
      if (!token) {
        return next(new Error('Authentication error: Token required'));
      }

      const session = await verifyToken(token);
      
      if (!session) {
        return next(new Error('Authentication error: Invalid token'));
      }

      socket.userId = session.userId;
      next();
    } catch (error) {
      console.error('Socket authentication error:', error);
      next(new Error('Authentication error'));
    }
  });

  // Handle connection
  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.userId}`);

    // Join room
    socket.on('join-room', async ({ roomId }) => {
      try {
        // Check if room exists
        const room = store.getRoom(roomId);
        
        if (!room) {
          socket.emit('error', { message: 'Room not found' });
          return;
        }

        // Check if user is in the room and approved
        const participant = store.getParticipantByUserAndRoom(socket.userId, roomId);

        if (!participant || participant.status !== 'approved') {
          socket.emit('error', { message: 'Not authorized to join this room' });
          return;
        }

        // Update participant with socket ID and status
        store.updateParticipant(participant.id, {
          connectionId: socket.id,
          status: 'active'
        });

        // Join socket room
        socket.join(roomId);

        // Get room participants
        const participants = store.getAllParticipantsByRoom(roomId)
          .filter(p => p.status === 'active')
          .map(p => ({
            id: p.id,
            userId: p.userId,
            name: p.name,
            profileImage: p.profileImage,
            role: p.role,
            hasAudio: p.hasAudio,
            hasVideo: p.hasVideo,
            hasScreenShare: p.hasScreenShare
          }));

        // Notify user about current participants
        socket.emit('room-joined', {
          roomId,
          participants
        });

        // Notify others about new participant
        socket.to(roomId).emit('participant-joined', {
          id: participant.id,
          userId: participant.userId,
          name: participant.name,
          profileImage: participant.profileImage,
          role: participant.role,
          hasAudio: participant.hasAudio,
          hasVideo: participant.hasVideo,
          hasScreenShare: participant.hasScreenShare
        });
      } catch (error) {
        console.error('Error joining room:', error);
        socket.emit('error', { message: 'Failed to join room' });
      }
    });

    // Leave room
    socket.on('leave-room', async ({ roomId }) => {
      try {
        // Update participant status
        const participant = store.getParticipantByUserAndRoom(socket.userId, roomId);

        if (participant) {
          store.updateParticipant(participant.id, {
            status: 'left',
            leftAt: new Date().toISOString(),
            hasAudio: false,
            hasVideo: false,
            hasScreenShare: false,
            connectionId: null
          });

          // Notify others
          socket.to(roomId).emit('participant-left', {
            userId: socket.userId
          });
        }

        // Leave socket room
        socket.leave(roomId);
      } catch (error) {
        console.error('Error leaving room:', error);
      }
    });

    // WebRTC signaling
    socket.on('signal', async ({ roomId, to, signal, type }) => {
      try {
        // Find recipient's socket ID
        const recipient = store.getParticipantByUserAndRoom(to, roomId);

        if (recipient && recipient.connectionId) {
          // Forward signal to recipient
          io.to(recipient.connectionId).emit('signal', {
            from: socket.userId,
            signal,
            type
          });
        }
      } catch (error) {
        console.error('Error in signaling:', error);
      }
    });

    // Media state changes
    socket.on('media-state', async ({ roomId, hasAudio, hasVideo, hasScreenShare }) => {
      try {
        // Update participant
        const participant = store.getParticipantByUserAndRoom(socket.userId, roomId);

        if (participant) {
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

          store.updateParticipant(participant.id, updates);

          // Notify others
          socket.to(roomId).emit('participant-media', {
            userId: socket.userId,
            ...updates
          });
        }
      } catch (error) {
        console.error('Error updating media state:', error);
      }
    });

    // Chat message
    socket.on('chat-message', async ({ roomId, message }) => {
      try {
        const participant = store.getParticipantByUserAndRoom(socket.userId, roomId);

        if (participant) {
          // Broadcast message to room
          io.to(roomId).emit('chat-message', {
            userId: socket.userId,
            name: participant.name,
            message,
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        console.error('Error sending chat message:', error);
      }
    });

    // Resume sharing
    socket.on('resume-share', async ({ roomId, resumeUrl, resumeShared }) => {
      try {
        const participant = store.getParticipantByUserAndRoom(socket.userId, roomId);

        if (participant) {
          // Update resume sharing
          store.updateParticipant(participant.id, {
            resumeShared: resumeShared !== undefined ? resumeShared : true,
            resumeUrl: resumeUrl || participant.resumeUrl
          });

          // Notify room
          io.to(roomId).emit('resume-shared', {
            userId: socket.userId,
            name: participant.name,
            resumeUrl: resumeUrl || participant.resumeUrl,
            resumeShared: resumeShared !== undefined ? resumeShared : true
          });
        }
      } catch (error) {
        console.error('Error sharing resume:', error);
      }
    });

    // Handle disconnect
    socket.on('disconnect', async () => {
      try {
        // Find all active participants for this user with this connection ID
        const participants = store.getAllParticipantsByRoom()
          .filter(p => p.userId === socket.userId && p.connectionId === socket.id);

        // Update each participant
        for (const participant of participants) {
          store.updateParticipant(participant.id, {
            status: 'left',
            leftAt: new Date().toISOString(),
            hasAudio: false,
            hasVideo: false,
            hasScreenShare: false,
            connectionId: null
          });

          // Notify room
          io.to(participant.roomId).emit('participant-left', {
            userId: socket.userId
          });
        }

        console.log(`User disconnected: ${socket.userId}`);
      } catch (error) {
        console.error('Error handling disconnect:', error);
      }
    });
  });

  return io;
}

module.exports = {
  setupWebSocketServer
};