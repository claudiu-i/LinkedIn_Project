import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, Video, VideoOff, Monitor, X } from 'lucide-react';
import './Room.css';

const Room = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isPresenting, setIsPresenting] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const displayStreamRef = useRef(null);

  const setupMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      stream.getAudioTracks().forEach(track => {
        track.enabled = !isMuted;
      });
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  useEffect(() => {
    setupMedia();
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (displayStreamRef.current) {
        displayStreamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const toggleMute = () => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach(track => {
        track.enabled = isMuted;
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleCamera = () => {
    if (streamRef.current) {
      const videoTracks = streamRef.current.getVideoTracks();
      
      if (isCameraOn) {
        // Turning camera off
        videoTracks.forEach(track => {
          track.enabled = false;
        });
      } else {
        setupMedia();
        // Turning camera on
        videoTracks.forEach(track => {
          track.enabled = true;
        });
        
        // If video is still not working, try to restart the camera
        if (videoTracks.length > 0 && !videoTracks[0].enabled) {
          // Force camera restart
          const restartCamera = async () => {
            try {
              const newStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: streamRef.current.getAudioTracks().length > 0
              });
              
              // Replace only the video tracks
              const audioTracks = streamRef.current.getAudioTracks();
              audioTracks.forEach(track => {
                newStream.addTrack(track);
              });
              
              streamRef.current.getVideoTracks().forEach(track => {
                track.stop();
                streamRef.current.removeTrack(track);
              });
              
              newStream.getVideoTracks().forEach(track => {
                streamRef.current.addTrack(track);
              });
              
              if (videoRef.current) {
                videoRef.current.srcObject = streamRef.current;
              }
            } catch (error) {
              console.error("Error restarting camera:", error);
            }
          };
          
          restartCamera();
        }
      }
      
      setIsCameraOn(!isCameraOn);
    }
  };

  const startPresenting = async () => {
    if (isPresenting) {
      if (displayStreamRef.current) {
        displayStreamRef.current.getTracks().forEach(track => track.stop());
        displayStreamRef.current = null;
      }
      if (videoRef.current && streamRef.current) {
        videoRef.current.srcObject = streamRef.current;
      }
    } else {
      try {
        const displayStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true
        });
        displayStreamRef.current = displayStream;
        if (videoRef.current) {
          videoRef.current.srcObject = displayStream;
        }
        displayStream.getVideoTracks()[0].onended = () => {
          setIsPresenting(false);
          if (videoRef.current && streamRef.current) {
            videoRef.current.srcObject = streamRef.current;
          }
        };
      } catch (error) {
        console.error("Error starting screen share:", error);
        return;
      }
    }
    setIsPresenting(!isPresenting);
  };

  const navigate = useNavigate();

  return (
    <div className="room-page">
      <header className="room-header">
        <h1 className="room-title">Video Room</h1>
        <button className="leave-button" onClick={() => navigate('/home')}>
          Leave Room
        </button>
      </header>

      <main className="room-main">
      <div className="main-video">
          {isCameraOn || isPresenting ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="video-element"
            />
          ) : (
            <div className="no-video">
              <img
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                alt="User"
                className="user-image"
              />
            </div>
          )}
          <div className="video-label">
            You / Host {isMuted ? '(Muted)' : ''} {isPresenting ? '(Presenting)' : ''}
          </div>
        </div>

        <div className="participants-grid">
          {[...Array(4)].map((_, index) => (
            <div className="video-tile participant-placeholder" key={index}>
              <div className="video-placeholder">
                <img
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=032${index + 2}`}
                  alt={`Participant ${index + 1}`}
                  className="user-image"
                />
              </div>
              <div className="video-label">Participant {index + 1}</div>
            </div>
          ))}
        </div>
      </main>

      <footer className="room-footer">
        <button
          className={`control-button ${isMuted ? 'active' : ''}`}
          onClick={toggleMute}
        >
          {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
          {isMuted ? ' Unmute' : ' Mute'}
        </button>

        <button
          className={`control-button ${isCameraOn ? 'active' : ''}`}
          onClick={toggleCamera}
        >
          {isCameraOn ? <Video size={20} /> : <VideoOff size={20} />}
          {isCameraOn ? ' Hide Camera' : ' Show Camera'}
        </button>

        <button
          className={`control-button ${isPresenting ? 'danger' : ''}`}
          onClick={startPresenting}
        >
          {isPresenting ? <X size={20} /> : <Monitor size={20} />}
          {isPresenting ? ' Stop Presenting' : ' Present Screen'}
        </button>
      </footer>
    </div>
  );
};

export default Room;