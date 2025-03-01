// src/app.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Room from './pages/Room';
import CreateRoom from './pages/CreateRoom';
import Profile from './pages/Profile';
import LinkedInPage  from './pages/LinkedInPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LinkedInPage />} />
          {/* Protected routes */}
          <Route path="/home" element={<Home />} />
          <Route
            path="/room/:roomId"
            element={
              <Room />
            }
          />
          <Route
            path="/create-room"
            element={
              <CreateRoom />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile />
            }
          />
          {/* Redirect any unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}


// function App() {
//   return (
//     <div>
//       <h1>Hello, LinkedIn Rooms!</h1>
//     </div>
//   );
// }

export default App;