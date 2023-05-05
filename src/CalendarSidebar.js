import React from 'react';

function CalendarSidebar({ onViewChange }) {
  return (
    <div className="calendar-sidebar">
      <h3>View Options</h3>
      <button onClick={() => onViewChange('month')}>Month</button>
      <button onClick={() => onViewChange('week')}>Week</button>
      <button onClick={() => onViewChange('day')}>Day</button>
    </div>
  );
}

export default CalendarSidebar;

//In this component, we create buttons for each of the view options (month, week, and day) and use the onViewChange callback to change the calendar view.