import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage = () => {
  return (
    <div>
      <h1>Settings</h1>
      {/* Add settings options here */}
      <Link to="/calendar/dayGridMonth">Back</Link>
    </div>
  );
};

export default SettingsPage;