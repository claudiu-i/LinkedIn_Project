const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5001", // React Frontend
    methods: ["GET", "POST"]
  }
});


io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join-room", () => {
    socket.broadcast.emit("user-joined", socket.id);
  });

  socket.on("offer", (offer) => {
    socket.broadcast.emit("offer", offer);
  });

  socket.on("answer", (answer) => {
    socket.broadcast.emit("answer", answer);
  });

  socket.on("candidate", (candidate) => {
    socket.broadcast.emit("candidate", candidate);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 0; // Assigns a random available port
server.listen(PORT, () => console.log(`Server running on port ${server.address().port}`));

