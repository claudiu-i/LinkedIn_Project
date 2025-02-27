// routes/userRoutes.js
const express = require('express');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Get current user profile
router.get('/me', protect, (req, res) => {
  // Since we're using Clerk for auth, we can just return the user info from the request
  res.status(200).json({
    success: true,
    data: req.user
  });
});

module.exports = router;