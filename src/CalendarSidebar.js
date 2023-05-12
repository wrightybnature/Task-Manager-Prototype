import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faCalendarAlt,
  faCalendarWeek,
  faCalendarDay,
  faCog,
  faSignOutAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import './CalendarSidebar.css';
import TaskForm from './TaskForm';

function CalendarSidebar({ sidebarCollapsed, setSidebarCollapsed, onButtonClick }) {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = (view) => {
    if (view === 'logout' || view === 'settings') {
      onButtonClick(view);
    }
  };

  return (
    <div className={`calendar-sidebar${sidebarCollapsed ? ' collapsed' : ''}`}>
      <button
        className={`expand-collapse-btn${isFormVisible ? ' expanded' : ''}`}
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
      >
        <FontAwesomeIcon icon={sidebarCollapsed ? faPlus : faMinus} />
      </button>
      <div className="sidebar-content">
        <h2>Task Manager</h2>
        <h4>Hello, Felicity</h4>
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
        <div className='divider'></div>
        <div className="task-settings">
          <div className="task-options">
            <button
              className="form-toggle-btn"
              onClick={() => setFormVisible(!isFormVisible)}
            >
              <FontAwesomeIcon icon={isFormVisible ? faMinus : faPlus} />
              {!sidebarCollapsed && ' New Task'}
            </button>
            {isFormVisible && <TaskForm isVisible={isFormVisible} />}
          </div>
          <div className="delete-task">
            <button onClick={() => {/* add your delete task functionality here */}}>
              <FontAwesomeIcon icon={faTrash} />
              {!sidebarCollapsed && ' Delete Task'}
            </button>
          </div>
        </div>
        <div className='divider'></div>
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
    </div>
  );
}

export default CalendarSidebar;
