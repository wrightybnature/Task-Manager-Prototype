import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SettingsPage.css';

function SettingsPage() {
  const [userName, setUserName] = useState('Felicity');
  const [userEmail, setUserEmail] = useState('felicity@example.com');

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <div>
      <h1>Settings</h1>
      <h2>Account</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={userName}
        onChange={handleNameChange}
        className="settings-input"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={userEmail}
        onChange={handleEmailChange}
        className="settings-input"
      />
      <button className="settings-button">Reset Password</button>
      <br />
      <br />
      <h2>Other</h2>
      <button className="settings-button">Support</button>
      <br />
      <br />
      <Link to="/calendar/dayGridMonth">Back</Link>
    </div>
  );
}

export default SettingsPage;