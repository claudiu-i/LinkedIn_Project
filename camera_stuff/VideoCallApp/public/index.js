// Connect to the Socket.io server
const socket = io('/');

// Initialize PeerJS (uses a random ID by default)
const peer = new Peer();

// Get reference to the video container element
const videoDiv = document.getElementById('videoDiv');

// Create a video element for our own stream
const myVideo = document.createElement('video');
myVideo.muted = true;                // avoid audio feedback
let myVideoStream;

// Get user's media
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);

    /* ---------- Mute & camera toggle ---------- */
    const muteButton = document.getElementById('muteButton');
    const videoButton = document.getElementById('videoButton');

    muteButton.addEventListener('click', () => {
      const audioTrack = myVideoStream.getAudioTracks()[0];
      if (!audioTrack) return;
      audioTrack.enabled = !audioTrack.enabled;
      muteButton.textContent = audioTrack.enabled ? 'Mute' : 'Unmute';
    });

    videoButton.addEventListener('click', () => {
      const videoTrack = myVideoStream.getVideoTracks()[0];
      if (!videoTrack) return;
      videoTrack.enabled = !videoTrack.enabled;
      videoButton.textContent = videoTrack.enabled ? 'Stop Video' : 'Start Video';
    });
    /* ---------- End controls ---------- */

    // Answer incoming calls
    peer.on('call', call => {
      call.answer(stream);
      const video = document.createElement('video');
      call.on('stream', userVideoStream => addVideoStream(video, userVideoStream));
      call.on('error', console.error);
    });

    // Call users who just joined
    socket.on('userJoined', userId => connectToNewUser(userId, stream));
  })
  .catch(err => {
    console.error('Failed to get local stream', err);
    alert('Could not access camera and microphone.');
  });

// Tell others we’re here once PeerJS is ready
peer.on('open', id => socket.emit('newUser', id));

/* ---------- Helper functions ---------- */
function connectToNewUser(userId, stream) {
  const call = peer.call(userId, stream);
  const video = document.createElement('video');
  call.on('stream', userVideoStream => addVideoStream(video, userVideoStream));
  call.on('error', console.error);
}

function addVideoStream(video, stream) {
  video.classList.add('peerVideo');  //   <── gives CSS a target
  video.srcObject = stream;
  video.setAttribute('playsinline', true); // mobile Safari fix
  video.addEventListener('loadedmetadata', () => video.play());
  videoDiv.appendChild(video);
}
