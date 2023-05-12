import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faTextHeight, faLanguage, faBell } from '@fortawesome/free-solid-svg-icons';
import './SettingsPage.css';

function SettingsPage() {
  // State for user's name and email
  const [userName, setUserName] = useState('Felicity');
  const [userEmail, setUserEmail] = useState('felicity@example.com');

  // Handlers for name and email change
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <div className="settings-container"> {/* Container for centering the content */}
      <h1>Settings</h1>
      <h2>Account</h2>

      {/* Name input field */}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={userName}
        onChange={handleNameChange}
        className="settings-input name-input"
      />

      {/* Email input field */}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={userEmail}
        onChange={handleEmailChange}
        className="settings-input email-input"
      />

      {/* Reset Password button */}
      <button className="settings-button reset-password-button">Reset Password</button>

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

      {/* Brightness slider */}
      <div className="settings-label">
        <FontAwesomeIcon icon={faSun} className="settings-icon" />
        <span>Brightness</span>
        <input type="range" min="1" max="100" className="slider" />
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
      <button className="settings-button support-button">Support</button>

      {/* Back button */}
      <Link to="/calendar/dayGridMonth" className="settings-button back-button">Back
      </Link>
    </div>
  );
}

export default SettingsPage;
