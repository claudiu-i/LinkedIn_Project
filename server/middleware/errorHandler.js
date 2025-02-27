// middleware/errorHandler.js
const { StatusCodes } = require('http-status-codes');

/**
 * Global error handler middleware
 */
const errorHandler = (err, req, res, next) => {
  console.error(err);
  
  // Default error message
  let message = 'Something went wrong';
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  
  // For validation errors
  if (err.name === 'ValidationError') {
    message = Object.values(err.errors).map(val => val.message).join(', ');
    statusCode = StatusCodes.BAD_REQUEST;
  }
  
  // For missing ID errors
  else if (err.kind === 'ObjectId') {
    message = 'Resource not found';
    statusCode = StatusCodes.NOT_FOUND;
  }
  
  // For duplicate key errors
  else if (err.code === 11000) {
    message = `Duplicate value entered for ${Object.keys(err.keyValue)} field`;
    statusCode = StatusCodes.BAD_REQUEST;
  }
  
  // For custom errors
  else if (err.statusCode) {
    message = err.message;
    statusCode = err.statusCode;
  }
  
  // Send response
  res.status(statusCode).json({
    success: false,
    message,
    // In development, also provide stack trace
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

module.exports = { errorHandler };