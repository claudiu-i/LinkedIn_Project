// server.js
require('dotenv').config();
const http = require('http');
const app = require('./app');
const { setupWebSocketServer } = require('./websocket');

const PORT = process.env.PORT || 5001;

// Create HTTP server
const server = http.createServer(app);

// Initialize WebSocket server
setupWebSocketServer(server);

// Start server
async function startServer() {
  try {
    // Start the server
    server.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
      console.log('Note: Using in-memory storage. All data will be lost on server restart.');
    });
  } catch (error) {
    console.error(`Error starting server: ${error.message}`);
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

startServer();