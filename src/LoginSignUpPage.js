import React from 'react';
import './LoginSignUpPage.css';
import './SignUpPage.css';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className="g-darkest">
          <h1>Task Manager</h1>
        </div>
        <h1 className="g-dark">Log in to Your Account</h1>
        <div className="social-buttons">
          <button className="social-btn facebook-btn">
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
        <button className="social-btn google-btn">
          <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button className="social-btn twitter-btn">
          <FontAwesomeIcon icon={faTwitter} />
        </button>
        <button className="social-btn linkedin-btn">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
        </div>
        <div className="divider">
          <span className="g-dark">or</span>
        </div>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="login" className="submit">Log in</button>
        </form>
      </div>
      <div className="signup-container">
        <h1 className="blue">Sign Up</h1>
        <p className="blue">Keep track of all your tasks by making an account now!</p>
        <button className="submit-signup" onClick={() => window.location.href = '/signup'}>Sign up</button>
        
      </div>
    </div>
  );
}

export default LoginSignUpPage;
