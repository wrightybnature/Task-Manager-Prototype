import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCalendarWeek, faCalendarAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './AppCalendar.css';

function AppCalendar() {
  const [events, setEvents] = useState([]);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const calendarRef = React.createRef();
  const navigate = useNavigate();
  const name = 'Felicity';

  const handleDateClick = (info) => {
    const newEvent = {
      title: 'New Task',
      start: info.dateStr,
      allDay: true,
    };
    setEvents([...events, newEvent]);
  };

  const handleViewChange = (view) => {
    calendarRef.current.getApi().changeView(view);
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className="app-calendar">
      <div className={`calendar-sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {sidebarExpanded ? '-' : '+'}
        </button>
        <h1>Task Manager</h1>
        <h3>Hello, {name}</h3>
        <hr />
        <button onClick={() => handleViewChange('dayGridMonth')}>
          <FontAwesomeIcon icon={faCalendarAlt} />
          {sidebarExpanded && ' Month'}
        </button>
        <button onClick={() => handleViewChange('timeGridWeek')}>
          <FontAwesomeIcon icon={faCalendarWeek} />
          {sidebarExpanded && ' Week'}
        </button>
        <button onClick={() => handleViewChange('timeGridDay')}>
          <FontAwesomeIcon icon={faCalendarDay} />
          {sidebarExpanded && ' Day'}
        </button>
        <hr />
        <button onClick={() => navigate('/settings')}>
          <FontAwesomeIcon icon={faCog} />
          {sidebarExpanded && ' Settings'}
        </button>
        <button onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          {sidebarExpanded && ' Logout'}
        </button>
      </div>
      <div className="calendar-container mt-4">
        <div style={{ height: '500px' }}>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={false}
            events={events}
            dateClick={handleDateClick}
          />
        </div>
      </div>
    </div>
  );
}

export default AppCalendar;
