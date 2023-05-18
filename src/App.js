import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUpPage from './LoginSignUpPage';
import AppCalendar from './AppCalendar';
import SignUpPage from './SignUpPage';
import SettingsPage from './SettingsPage';
import Support from './Support';
import ResetPassword from './ResetPassword';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignUpPage />} />
          <Route path="/calendar" element={<AppCalendar />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;