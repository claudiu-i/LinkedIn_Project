// routes/roomRoutes.js
const express = require('express');
const { protect, recruiterOnly } = require('../middleware/auth');
const {
  createRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
  joinRoom,
  leaveRoom,
  startRoom,
  endRoom
} = require('../controllers/roomController');
const {
  getRoomParticipants,
  approveParticipant,
  rejectParticipant,
  changeParticipantRole,
  updateParticipantMedia,
  shareResume
} = require('../controllers/participantController');

const router = express.Router();

// Room routes
router.route('/')
  .get(getRooms)
  .post(protect, recruiterOnly, createRoom);

router.route('/:id')
  .get(protect, getRoomById)
  .put(protect, updateRoom)
  .delete(protect, deleteRoom);

router.post('/:id/join', protect, joinRoom);
router.post('/:id/leave', protect, leaveRoom);
router.post('/:id/start', protect, startRoom);
router.post('/:id/end', protect, endRoom);

// Participant routes (nested under rooms)
router.get('/:roomId/participants', protect, getRoomParticipants);
router.put('/:roomId/participants/:participantId/approve', protect, approveParticipant);
router.put('/:roomId/participants/:participantId/reject', protect, rejectParticipant);
router.put('/:roomId/participants/:participantId/role', protect, changeParticipantRole);
router.put('/:roomId/participants/media', protect, updateParticipantMedia);
router.put('/:roomId/participants/resume', protect, shareResume);

module.exports = router;