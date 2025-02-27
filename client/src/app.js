// src/app.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

// Import pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Room from './pages/Room';
import CreateRoom from './pages/CreateRoom';
import Profile from './pages/Profile';

// Initialize Clerk with your publishable key
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// Protected route component
const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <div className="app-container">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/sign-in/*" element={<SignIn />} />
            <Route path="/sign-up/*" element={<SignUp />} />
            
            {/* Protected routes */}
            <Route 
              path="/room/:roomId" 
              element={
                <ProtectedRoute>
                  <Room />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/create-room" 
              element={
                <ProtectedRoute>
                  <CreateRoom />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            
            {/* Redirect any unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
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