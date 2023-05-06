import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUpPage from './LoginSignUpPage';
import AppCalendar from './AppCalendar';
import SignUpPage from './SignUpPage';
import SettingsPage from './SettingsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignUpPage />} />
          <Route path="/calendar" element={<AppCalendar />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;