import React, { createContext, useState, useContext, useCallback, useEffect, } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

// Create context
const CallContext = createContext();

// Sample data for active calls
const sampleCalls = [
  {
    id: 1,
    name: 'Weekly Team Sync',
    organizer: 'Jane Doe',
    startTime: '2025-03-09T14:00:00',
    participants: 8,
    maxParticipants: 10,
    isPrivate: true,
    isVideo: true
  },
  {
    id: 2,
    name: 'Product Demo with Client',
    organizer: 'John Smith',
    startTime: '2025-03-09T16:30:00',
    participants: 4,
    maxParticipants: 15,
    isPrivate: false,
    isVideo: true
  }
];

export const CallProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);

  // Open modal function
  const openCallModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  // Close modal function
  const closeCallModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  // Function to create a new call
  const createCall = useCallback((values) => {
    const newCall = {
      id: Date.now(),
      name: values.callName,
      organizer: 'You',
      startTime: values.startDate && values.startTime ? 
        `${values.startDate.format('YYYY-MM-DD')}T${values.startTime.format('HH:mm:ss')}` : 
        new Date().toISOString(),
      participants: 1,
      maxParticipants: values.maxParticipants || 10,
      isPrivate: values.privateCall || false,
      isVideo: values.callType === 'video'
    };
    
    setCalls(prevCalls => {
      const updatedCalls = [newCall, ...prevCalls];
      localStorage.setItem('calls', JSON.stringify(updatedCalls));
      return updatedCalls;
    });
    message.success(`Room "${values.callName}" created successfully!`);
    closeCallModal();
  }, [closeCallModal]);

  // Function to load calls (simulated)
  const loadCalls = useCallback(() => {
    setLoading(true);
    setLoadError(false);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const storedCalls = JSON.parse(localStorage.getItem('calls')) || sampleCalls;
      setCalls(storedCalls);
      localStorage.setItem('calls', JSON.stringify(storedCalls));
      setLoading(false);
    }, 600);
  }, []);

  // Function to join a call
  const navigate = useNavigate();
  const joinCall = useCallback((callId) => {
    message.info(`Joining room ID: ${callId}`);
    navigate(`/room/${callId}`);
    // In a real app, you would implement the actual join functionality here
  }, []);

  // Load calls on initial render
  useEffect(() => {
    loadCalls();
  }, [loadCalls]);

  const value = {
    modalVisible,
    calls,
    loading,
    loadError,
    openCallModal,
    closeCallModal,
    createCall,
    loadCalls,
    joinCall
  };

  return <CallContext.Provider value={value}>{children}</CallContext.Provider>;
};

// Custom hook to use the call context
export const useCallContext = () => {
  const context = useContext(CallContext);
  if (context === undefined) {
    throw new Error('useCallContext must be used within a CallProvider');
  }
  return context;
};

export const setModalTopPosition = (value) => {
  document.documentElement.style.setProperty('--modal-top', 
    typeof value === 'number' ? `${value}px` : value);
};