// src/pages/CreateRoom.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRoom = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    isPrivate: false,
    accessCode: '',
    maxParticipants: 10,
    enableVideo: true,
    enableAudio: true,
    enableChat: true,
    enableScreenShare: true,
    autoAdmit: true
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      
      // Validate form data
      if (!formData.name.trim()) {
        setError('Room name is required');
        setLoading(false);
        return;
      }
      
      if (formData.isPrivate && !formData.accessCode.trim()) {
        setError('Access code is required for private rooms');
        setLoading(false);
        return;
      }
      
      // Navigate to the new room
    } catch (err) {
      console.error('Error creating room:', err);
      setError('Failed to create room. Please try again.');
      setLoading(false);
    }
  };
  
  return (
    <div className="container">
      <h2>Create a Room</h2>
      
      {error && (
        <div className="error" style={{ marginBottom: '20px' }}>
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Room Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="maxParticipants">Max Participants</label>
          <input
            type="number"
            id="maxParticipants"
            name="maxParticipants"
            value={formData.maxParticipants}
            onChange={handleChange}
            min="1"
            max="50"
          />
        </div>
        
        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="isPrivate"
            name="isPrivate"
            checked={formData.isPrivate}
            onChange={handleChange}
          />
          <label htmlFor="isPrivate">Private Room</label>
        </div>
        
        {formData.isPrivate && (
          <div className="form-group">
            <label htmlFor="accessCode">Access Code *</label>
            <input
              type="text"
              id="accessCode"
              name="accessCode"
              value={formData.accessCode}
              onChange={handleChange}
              required={formData.isPrivate}
            />
          </div>
        )}
        
        <div className="checkbox-group">
          <h3>Room Settings</h3>
          
          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="enableVideo"
              name="enableVideo"
              checked={formData.enableVideo}
              onChange={handleChange}
            />
            <label htmlFor="enableVideo">Enable Video</label>
          </div>
          
          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="enableAudio"
              name="enableAudio"
              checked={formData.enableAudio}
              onChange={handleChange}
            />
            <label htmlFor="enableAudio">Enable Audio</label>
          </div>
          
          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="enableChat"
              name="enableChat"
              checked={formData.enableChat}
              onChange={handleChange}
            />
            <label htmlFor="enableChat">Enable Chat</label>
          </div>
          
          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="enableScreenShare"
              name="enableScreenShare"
              checked={formData.enableScreenShare}
              onChange={handleChange}
            />
            <label htmlFor="enableScreenShare">Enable Screen Sharing</label>
          </div>
          
          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="autoAdmit"
              name="autoAdmit"
              checked={formData.autoAdmit}
              onChange={handleChange}
            />
            <label htmlFor="autoAdmit">Auto-Admit Participants</label>
          </div>
        </div>
        
        <div className="form-actions">
          <button 
            type="button" 
            className="button"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="button primary"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Room'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoom;

// Add this CSS to index.css
/* 
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group.checkbox {
  display: flex;
  align-items: center;
}

.form-group.checkbox input {
  width: auto;
  margin-right: 10px;
}

.checkbox-group {
  margin-bottom: 20px;
}

.checkbox-group h3 {
  margin-bottom: 15px;
  font-size: 18px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 30px;
}
*/