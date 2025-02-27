// server/store/index.js
const { v4: uuidv4 } = require('uuid');

/**
 * Simple in-memory data store for the LinkedIn Rooms MVP
 * Note: All data will be lost when the server restarts
 */
class Store {
  constructor() {
    // Initialize in-memory data structures
    this.rooms = new Map();
    this.participants = new Map();
    this.resumes = new Map();
  }

  // ROOM METHODS
  createRoom(roomData) {
    const id = uuidv4();
    const now = new Date().toISOString();
    
    const room = {
      id,
      ...roomData,
      createdAt: now,
      updatedAt: now,
      participants: []
    };
    
    this.rooms.set(id, room);
    return room;
  }

  getRoom(roomId) {
    return this.rooms.get(roomId);
  }

  getAllRooms(filters = {}) {
    let rooms = Array.from(this.rooms.values());
    
    // Apply filters if any
    if (filters.status) {
      rooms = rooms.filter(room => room.status === filters.status);
    }
    
    if (filters.isPrivate !== undefined) {
      rooms = rooms.filter(room => room.isPrivate === filters.isPrivate);
    }
    
    // Sort by creation date (newest first)
    rooms.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    return rooms;
  }

  updateRoom(roomId, updates) {
    const room = this.getRoom(roomId);
    if (!room) return null;
    
    const updatedRoom = {
      ...room,
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    this.rooms.set(roomId, updatedRoom);
    return updatedRoom;
  }

  deleteRoom(roomId) {
    // Delete all participants in the room first
    const participants = this.getAllParticipantsByRoom(roomId);
    participants.forEach(participant => {
      this.participants.delete(participant.id);
    });
    
    // Then delete the room
    return this.rooms.delete(roomId);
  }

  // PARTICIPANT METHODS
  addParticipant(participantData) {
    const id = uuidv4();
    const now = new Date().toISOString();
    
    const participant = {
      id,
      ...participantData,
      joinedAt: now,
      leftAt: null
    };
    
    this.participants.set(id, participant);
    
    // Add to room's participants list if not already there
    const room = this.getRoom(participant.roomId);
    if (room && !room.participants.includes(id)) {
      room.participants.push(id);
      this.rooms.set(room.id, room);
    }
    
    return participant;
  }

  getParticipant(participantId) {
    return this.participants.get(participantId);
  }

  getParticipantByUserAndRoom(userId, roomId) {
    return Array.from(this.participants.values()).find(
      p => p.userId === userId && p.roomId === roomId
    );
  }

  getAllParticipantsByRoom(roomId) {
    return Array.from(this.participants.values()).filter(
      p => p.roomId === roomId
    );
  }

  updateParticipant(participantId, updates) {
    const participant = this.getParticipant(participantId);
    if (!participant) return null;
    
    const updatedParticipant = {
      ...participant,
      ...updates
    };
    
    this.participants.set(participantId, updatedParticipant);
    return updatedParticipant;
  }

  deleteParticipant(participantId) {
    const participant = this.getParticipant(participantId);
    if (!participant) return false;
    
    // Remove from room's participants list
    const room = this.getRoom(participant.roomId);
    if (room) {
      room.participants = room.participants.filter(id => id !== participantId);
      this.rooms.set(room.id, room);
    }
    
    return this.participants.delete(participantId);
  }

  // RESUME METHODS
  addResume(resumeData) {
    const id = uuidv4();
    const now = new Date().toISOString();
    
    const resume = {
      id,
      ...resumeData,
      createdAt: now,
      updatedAt: now
    };
    
    this.resumes.set(id, resume);
    return resume;
  }

  getResume(resumeId) {
    return this.resumes.get(resumeId);
  }

  getAllResumesByUser(userId) {
    return Array.from(this.resumes.values()).filter(
      r => r.userId === userId
    );
  }

  updateResume(resumeId, updates) {
    const resume = this.getResume(resumeId);
    if (!resume) return null;
    
    const updatedResume = {
      ...resume,
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    this.resumes.set(resumeId, updatedResume);
    return updatedResume;
  }

  deleteResume(resumeId) {
    return this.resumes.delete(resumeId);
  }
}

// Create a singleton instance
const store = new Store();

module.exports = store;