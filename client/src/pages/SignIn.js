// src/pages/SignIn.js
import React from 'react';
import { SignIn as ClerkSignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="container">
      <div className="auth-container">
        <h2>Sign In</h2>
        <ClerkSignIn signUpUrl="/sign-up" />
        <p style={{ marginTop: '20px', textAlign: 'center' }}>
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;