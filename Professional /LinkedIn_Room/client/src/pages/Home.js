// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/rooms?status=active`);
        setRooms(response.data.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching rooms:', err);
        setError('Failed to load rooms');
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <h1>LinkedIn Rooms</h1>
        </div>
        <nav>
          <SignedIn>
            <Link to="/create-room" className="button">Create Room</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in" className="button">Sign In</Link>
            <Link to="/sign-up" className="button primary">Sign Up</Link>
          </SignedOut>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Virtual Networking and Recruitment Events</h2>
          <p>Join LinkedIn Rooms to connect with professionals and recruiters in real-time</p>
          <SignedIn>
            <Link to="/create-room" className="button primary large">Create a Room</Link>
          </SignedIn>
          <SignedOut>
            <Link to="/sign-up" className="button primary large">Join Now</Link>
          </SignedOut>
        </section>

        <section className="rooms-list">
          <h3>Active Rooms</h3>
          
          {loading ? (
            <div className="loading">Loading rooms...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : rooms.length === 0 ? (
            <div className="no-rooms">
              <p>No active rooms at the moment.</p>
              <SignedIn>
                <p>Why not <Link to="/create-room">create one</Link>?</p>
              </SignedIn>
            </div>
          ) : (
            <div className="room-grid">
              {rooms.map(room => (
                <div key={room.id} className="room-card">
                  <h4>{room.name}</h4>
                  <p>{room.description}</p>
                  <div className="room-details">
                    <span>Host: {room.ownerName}</span>
                    <span>Participants: {room.participants?.length || 0}</span>
                  </div>
                  <SignedIn>
                    <Link to={`/room/${room.id}`} className="button">Join Room</Link>
                  </SignedIn>
                  <SignedOut>
                    <Link to="/sign-in" className="button">Sign in to join</Link>
                  </SignedOut>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} LinkedIn Rooms - MVP Demo</p>
      </footer>
    </div>
  );
};

export default Home;