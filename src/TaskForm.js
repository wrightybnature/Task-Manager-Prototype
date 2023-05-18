import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ isVisible }) {
  // State to manage the task form inputs
  const [task, setTask] = useState({ date: '', startTime: '', endTime: '', title: '', description: '', color: '' });

  // Updates the task state when an input changes
  const handleChange = (e) => {
    setTask({...task, [e.target.name]: e.target.value});
  }

  // Handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit your form here. This could involve updating the state in a parent component or making an API request.
  }

  // Only render the form if it is set to visible
  return isVisible ? (
    <div className="formTask">
      <form onSubmit={handleSubmit}>
        <label>
          Date
          <input type="date" name="date" value={task.date} onChange={handleChange} />
        </label>

        <label>
          Start Time
          <input type="time" name="startTime" value={task.startTime} onChange={handleChange} />
        </label>
        
        <label>
          End Time
          <input type="time" name="endTime" value={task.endTime} onChange={handleChange} />
        </label>
        
        <label>
          Title
          <input type="text" name="title" value={task.title} onChange={handleChange} />
        </label>

        <label>
          Description
          <textarea name="description" className="textareaStyle" value={task.description} onChange={handleChange} />
        </label>

        <label>
          Colour
          <input type="color" name="color" value={task.color} onChange={handleChange} />
        </label>

        <input type="submit" value="Submit" className="submit-task"></input>
      </form>
    </div>
  ) : null;
}

export default TaskForm;
