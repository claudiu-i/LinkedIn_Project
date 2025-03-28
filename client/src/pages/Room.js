// src/pages/Room.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const Room = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accessCode, setAccessCode] = useState('');

  // Audio/Video state
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [screenShareEnabled, setScreenShareEnabled] = useState(false);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/rooms/${roomId}`, {
          headers: {
            Authorization: `Bearer`
          }
        });

        setRoom(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching room:', err);
        setError('Failed to load room details');
        setLoading(false);
      }
    };
    fetchRoom();
  }, [roomId]);

  const handleJoinRoom = async () => {
    try {
      // Refetch room data after joining
      const response = await axios.get(`${API_URL}/rooms/${roomId}`, {
        headers: {
          Authorization: `Bearer`
        }
      });

      setRoom(response.data.data);
    } catch (err) {
      console.error('Error joining room:', err);
      setError('Failed to join room. Please check your access code and try again.');
    }
  };

  const handleLeaveRoom = async () => {
    try {
      navigate('/');
    } catch (err) {
      console.error('Error leaving room:', err);
      setError('Failed to leave room');
    }
  };

  // Simulate toggling audio/video for demo
  const toggleAudio = () => setAudioEnabled(!audioEnabled);
  const toggleVideo = () => setVideoEnabled(!videoEnabled);
  const toggleScreenShare = () => setScreenShareEnabled(!screenShareEnabled);

  if (loading) {
    return <div className="loading">Loading room...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!room) {
    return <div className="error">Room not found</div>;
  }

  // Check if room is private and user needs to enter access code
  if (room.isPrivate) {
    return (
      <div className="container">
        <div className="auth-container">
          <h2>{room.name}</h2>
          <p>This is a private room. Please enter the access code to join.</p>
          <div style={{ margin: '20px 0' }}>
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="Access Code"
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
            <button
              className="button primary"
              style={{ width: '100%' }}
              onClick={handleJoinRoom}
            >
              Join Room
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Demo video grid (no actual WebRTC for the minimal MVP)
  return (
    <div className="room-container">
      <div className="video-grid">
        {/* Your video */}
        <div className="video-tile">
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '5px',
            borderRadius: '4px'
          }}>
            You (Host)
          </div>
        </div>

        {/* Other participants would appear here */}
        <div className="video-tile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: 'white', textAlign: 'center' }}>
            <p>This is a demo version</p>
            <p>Actual video would appear here</p>
          </div>
        </div>
      </div>

      <div className="video-controls">
        <button
          className={`control-button ${audioEnabled ? 'active' : ''}`}
          onClick={toggleAudio}
        >
          {audioEnabled ? 'Mute' : 'Unmute'}
        </button>

        <button
          className={`control-button ${videoEnabled ? 'active' : ''}`}
          onClick={toggleVideo}
        >
          {videoEnabled ? 'Hide Video' : 'Show Video'}
        </button>

        <button
          className={`control-button ${screenShareEnabled ? 'active' : ''}`}
          onClick={toggleScreenShare}
        >
          {screenShareEnabled ? 'Stop Sharing' : 'Share Screen'}
        </button>

        <button
          className="control-button danger"
          onClick={handleLeaveRoom}
        >
          Leave
        </button>
      </div>
    </div>
  );
};

export default Room;