import React, { useState } from 'react';
import './LoginSignUpPage.css';

function LoginSignUpPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Replace with your actual email and password for demonstration purposes
    const validEmail = 'test@example.com';
    const validPassword = 'password';

    if (email === validEmail && password === validPassword) {
      window.location.href = '/calendar';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-signup-container">
      <div className="login-container">
        <h1>Log in to Your Account</h1>
        <div className="social-buttons">
          {/* Add the social media login buttons here */}
        </div>
        <div className="divider">
          <span>or</span>
        </div>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Log in</button>
        </form>
      </div>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <p>Keep track of all your tasks by making an account now!</p>
        <button onClick={() => window.location.href = '/signup'}>Sign up</button>
      </div>
    </div>
  );
}

export default LoginSignUpPage;
