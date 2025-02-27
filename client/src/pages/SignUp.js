// src/pages/SignUp.js
import React from 'react';
import { SignUp as ClerkSignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="container">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <ClerkSignUp signInUrl="/sign-in" />
        <p style={{ marginTop: '20px', textAlign: 'center' }}>
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;