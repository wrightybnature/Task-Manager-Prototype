import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faCalendarAlt,
  faCalendarWeek,
  faCalendarDay,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import './CalendarSidebar.css';

function CalendarSidebar({ sidebarCollapsed, setSidebarCollapsed, onButtonClick }) {
  const handleButtonClick = (view) => {
    if (view === 'logout' || view === 'settings') {
      onButtonClick(view);
    }
  };

  return (
    <div className={`calendar-sidebar${sidebarCollapsed ? ' collapsed' : ''}`}>
      <button
        className="expand-collapse-btn"
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
      >
        <FontAwesomeIcon icon={sidebarCollapsed ? faPlus : faMinus} />
      </button>
      <div className="sidebar-content">
        {!sidebarCollapsed && (
          <>
            <h2>Task Manager</h2>
            <h4>Hello, Felicity</h4>
          </>
        )}
        <div className="view-options">
          <button onClick={() => onButtonClick('dayGridMonth')}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {!sidebarCollapsed && ' Month'}
          </button>
          <button onClick={() => onButtonClick('timeGridWeek')}>
            <FontAwesomeIcon icon={faCalendarWeek} />
            {!sidebarCollapsed && ' Week'}
          </button>
          <button onClick={() => onButtonClick('timeGridDay')}>
            <FontAwesomeIcon icon={faCalendarDay} />
            {!sidebarCollapsed && ' Day'}
          </button>
        </div>
        <div className="settings-logout">
          <button onClick={() => handleButtonClick('settings')}>
            <FontAwesomeIcon icon={faCog} />
            {!sidebarCollapsed && ' Settings'}
          </button>
          <button onClick={() => handleButtonClick('logout')}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            {!sidebarCollapsed && ' Logout'}
          </button>
        </div>
      </div>
      <div
        className={`calendar-container${sidebarCollapsed ? ' collapsed' : ''}`}
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
      ></div>
    </div>
  );
}

export default CalendarSidebar;
