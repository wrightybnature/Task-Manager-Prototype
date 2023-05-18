import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faTextHeight, faLanguage, faBell} from '@fortawesome/free-solid-svg-icons';
import './SettingsPage.css';

function SettingsPage() {
  // State for user's name and email
  const [userName, setUserName] = useState('User\'s name');
  const [userEmail, setUserEmail] = useState('test@example.com');

  // Handlers for name and email change
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <h2>Account</h2>

      {/* Name input field */}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={userName}
        onChange={handleNameChange}
        className="input-field"
      />

      {/* Email input field */}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={userEmail}
        onChange={handleEmailChange}
        className="input-field"
      />

      {/* Reset Password button */}
      <div></div>
      <Link to="/reset-password" className="support-button">Reset Password</Link>

      <h2>Accessibility</h2>

      {/* Dark Mode binary slider */}
      <div className="settings-label">
        <FontAwesomeIcon icon={faMoon} className="settings-icon" />
        <span>Dark Mode</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Text Size dropdown */}
      <div className="settings-label">
        <FontAwesomeIcon icon={faTextHeight} className="settings-icon" />
        <span>Text Size</span>
        <select className="dropdown">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      {/* Language dropdown */}
      <div className="settings-label">
        <FontAwesomeIcon icon={faLanguage} className="settings-icon" />
        <span>Language</span>
        <select className="dropdown">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>

      {/* Notifications binary slider */}
      <div className="settings-label">
        <FontAwesomeIcon icon={faBell} className="settings-icon" />
        <span>Notifications</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>

      <h3>Other</h3>
      {/* Support button */}
      <Link to="/support" className="support-button">Support</Link>

      {/* Back button */}
      <div className="divider-clear"></div>
      <Link to="/calendar" className="rounded-button">Back
      </Link>
    </div>
  );
}

export default SettingsPage;
