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

  const name = "User!";

  return (
    <div className={`calendar-sidebar${sidebarCollapsed ? ' collapsed' : ''}`}>
      <button
        className={`expand-collapse-btn${isFormVisible ? ' expanded' : ''}`} // HERE
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
      >
        <FontAwesomeIcon icon={sidebarCollapsed ? faPlus : faMinus} />
      </button>
      <div className='centred'>
        <h2>Task Manager</h2>
        <h3>Hello, {name}</h3>
      </div>
      <div className="view-options">
        <button onClick={() => onButtonClick('dayGridMonth')}>
          <FontAwesomeIcon icon={faCalendarAlt} />
          {!sidebarCollapsed && '  Month'}
        </button>
        <button onClick={() => onButtonClick('timeGridWeek')}>
          <FontAwesomeIcon icon={faCalendarWeek} />
          {!sidebarCollapsed && '  Week'}
        </button>
        <button onClick={() => onButtonClick('timeGridDay')}>
          <FontAwesomeIcon icon={faCalendarDay} />
          {!sidebarCollapsed && '  Day'}
        </button>
      </div>
      <div className='divider'></div>
      <div className="task-settings">
        <div>
          <button
            onClick={() => setFormVisible(!isFormVisible)}
          >
            <FontAwesomeIcon icon={isFormVisible ? faMinus : faPlus} />
            {!sidebarCollapsed && ' New Task'}
          </button>
          {isFormVisible && <TaskForm isVisible={isFormVisible} />}
        </div>
        <div className="delete-task">
          <button onClick={() => {/* need to add delete task functionality here */}}>
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
  );
}

export default CalendarSidebar;
