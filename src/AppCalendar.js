import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './App.css';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';



function AppCalendar() {
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    // Add your event creation logic here
    const newEvent = {
      title: 'New Task',
      start: info.dateStr,
      allDay: true,
    };
    setEvents([...events, newEvent]);
  };

  const calendarRef = React.createRef();
  const name = "Felicity";
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
  

  return (
    // Step 2: Create a flex container for the navbar and the calendar
    <div className="d-flex">
      <NavBar onButtonClick={handleButtonClick} />
    <div className="container mt-4">
      <h1>Task Manager</h1>
      <h3>Hello, {name}</h3>
      <div>
        <div style={{ height: '500px' }}>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev',
              center: 'title',
              right: 'next dayGridMonth,timeGridWeek,timeGridDay,today',
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
