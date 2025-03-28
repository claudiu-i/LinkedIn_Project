// Connect to the Socket.io server
const socket = io('/');

// Initialize PeerJS (uses a random ID by default)
const peer = new Peer();

// Get reference to the video container element
const videoDiv = document.getElementById('videoDiv');

// Create a video element for our own stream
const myVideo = document.createElement('video');
myVideo.muted = true;  // Mute our own video to avoid feedback
let myVideoStream;

// Get user's video and audio stream
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  myVideoStream = stream;
  addVideoStream(myVideo, stream);

  // ----- NEW: Attach event listeners to the Mute and Stop Video buttons -----
  const muteButton = document.getElementById('muteButton');
  const videoButton = document.getElementById('videoButton');

  // Toggle audio
  muteButton.addEventListener('click', () => {
    const audioTrack = myVideoStream.getAudioTracks()[0];
    if (!audioTrack) return; // Edge case if there's no audio track

    // Mute/unmute
    if (audioTrack.enabled) {
      audioTrack.enabled = false;
      muteButton.innerText = 'Unmute';
    } else {
      audioTrack.enabled = true;
      muteButton.innerText = 'Mute';
    }
  });

  // Toggle video
  videoButton.addEventListener('click', () => {
    const videoTrack = myVideoStream.getVideoTracks()[0];
    if (!videoTrack) return; // Edge case if there's no video track

    // Stop/Start video
    if (videoTrack.enabled) {
      videoTrack.enabled = false;
      videoButton.innerText = 'Start Video';
    } else {
      videoTrack.enabled = true;
      videoButton.innerText = 'Stop Video';
    }
  });
  // ----- END NEW CODE -----

  // Answer incoming calls from other peers
  peer.on('call', call => {
    call.answer(stream);
    const video = document.createElement('video');
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream);
    });
    call.on('error', err => {
      console.error('Error in call:', err);
      alert(err);
    });
  });

  // When notified that a new user has joined, initiate a call to them
  socket.on('userJoined', userId => {
    connectToNewUser(userId, stream);
  });
}).catch(err => {
  console.error('Failed to get local stream', err);
  alert('Could not access camera and microphone.');
});

// Once the Peer connection is open, emit the newUser event with our peer ID
peer.on('open', id => {
  socket.emit('newUser', id);
});

// Function to call a new user and send them our stream
function connectToNewUser(userId, stream) {
  const call = peer.call(userId, stream);
  const video = document.createElement('video');
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream);
  });
  call.on('error', err => {
    console.error('Error connecting to new user:', err);
    alert(err);
  });
}

// Function to add a video stream to the page
function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener('loadedmetadata', () => {
    video.play();
  });
  videoDiv.append(video);
}
