// routes/resumeRoutes.js
const express = require('express');
const { protect } = require('../middleware/auth');
const {
  uploadResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
  checkResumeMatch
} = require('../controllers/resumeController');

const router = express.Router();

router.route('/')
  .get(protect, getUserResumes)
  .post(protect, uploadResume);

router.route('/:id')
  .get(protect, getResumeById)
  .put(protect, updateResume)
  .delete(protect, deleteResume);

router.post('/check-match', protect, checkResumeMatch);

module.exports = router;