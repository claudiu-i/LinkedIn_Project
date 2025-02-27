// middleware/auth.js
const { StatusCodes } = require('http-status-codes');
const { verifyToken, getUserById } = require('../config/clerk');

/**
 * Middleware to protect routes that require authentication
 */
const protect = async (req, res, next) => {
  try {
    // Get token from the Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: 'Authentication required. Please provide a valid token.'
      });
    }

    // Extract the token
    const token = authHeader.split(' ')[1];

    // Verify token with Clerk
    const session = await verifyToken(token);
    
    if (!session) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: 'Invalid or expired token.'
      });
    }

    // Get user details
    const user = await getUserById(session.userId);
    
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: 'User not found.'
      });
    }

    // Add user to request object
    req.user = {
      id: user.id,
      email: user.emailAddresses[0].emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImage: user.imageUrl
    };

    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Authentication failed. Please try again.'
    });
  }
};

/**
 * Middleware to check if user is a recruiter/premium user
 */
const recruiterOnly = (req, res, next) => {
  // For MVP, we'll allow all authenticated users to create rooms
  next();
};

module.exports = {
  protect,
  recruiterOnly
};