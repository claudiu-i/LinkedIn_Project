// server.js
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Render the index view. Here we pass a room identifier (for a more advanced app you could generate unique room IDs).
app.get('/', (req, res) => {
  res.render('index', { RoomId: "room" });
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});

// When a new socket connection is made...
io.on('connection', socket => {
  // Listen for the newUser event emitted from the client.
  socket.on('newUser', id => {
    // Join a room (using a static room id "room" for simplicity)
    socket.join('room');
    // Broadcast to all other clients in the room that a new user has joined
    socket.to('room').broadcast.emit('userJoined', id);
  });
});
