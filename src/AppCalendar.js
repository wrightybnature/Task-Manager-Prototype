import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './App.css';
import CalendarSidebar from './CalendarSidebar';
import { useNavigate } from 'react-router-dom';

function AppCalendar() {
  const [events, setEvents] = useState([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const calendarRef = React.createRef();
  const navigate = useNavigate();

  const handleButtonClick = (view) => {
    if (view === 'logout') {
      // Log out logic here
      navigate('/'); // Navigate to the login page
    } else if (view === 'settings') {
      navigate('/settings'); // Navigate to the settings page
    } else {
      calendarRef.current.getApi().changeView(view);
    }
  };

  const handleDateClick = (info) => {
    // Add your event creation logic here
    const newEvent = {
      title: 'New Task',
      start: info.dateStr,
      allDay: true,
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div className="d-flex">
      <CalendarSidebar
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        onButtonClick={handleButtonClick}
      />
      <div className="container mt-4">
        <div>
          <div style={{ height: '500px' }}>
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev',
                center: 'title',
                right: 'next,today',
              }}
              events={events}
              dateClick={handleDateClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCalendar;
