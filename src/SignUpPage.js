import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import './SignUpPage.css';

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
    <div className="centred">
      <h1>Sign Up</h1>
      <p>Create an account quickly using social media</p>
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
      <div className="separator">
        <span>or</span>
      </div>
      <form>
        <input type="text" placeholder="Name" required/>
        <input type="email" placeholder="Email" required/>
        <input type="email" placeholder="Confirm Email" required/>
        
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password" required
          />
          <button
            type="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>
        
        <div className="password-input">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password" required
          />
          <button
            type="eye"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
          </button>
        </div>
      
        <input type="submit" value="Submit" className="submit"></input>
      </form>
      <div className="divider-clear"></div>
      <Link to="/" className="rounded-button">Back</Link>
    </div>
  );
}

export default SignUpPage;
