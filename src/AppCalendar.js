import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './AppCalendar.css';
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
    <div>
      <CalendarSidebar
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        onButtonClick={handleButtonClick}
      />
      <div className="calendar-container">
        <div className="calendar-header">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            
            customButtons={{
              customPrev: {
                text: '<',
                click: function() {
                  calendarRef.current.getApi().prev();
                },
              },
              customNext: {
                text: '>',
                click: function() {
                  calendarRef.current.getApi().next();
                },
              },
            }}
            
            headerToolbar={{
              left: 'customPrev',
              center: 'title',
              right: 'customNext,today',
            }}
            
            events={events}
            dateClick={handleDateClick}
          />
        </div>
      </div>
    </div>
  );
}

export default AppCalendar;
