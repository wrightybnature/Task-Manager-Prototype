import React, { useState } from 'react';

const TaskForm = () => {
  const [task, setTask] = useState({ date: '', startTime: '', endTime: '', title: '', description: '', color: '' });

  const handleChange = (e) => {
    setTask({...task, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit your form here. This could involve updating the state in a parent component or making an API request.
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Task</h3>
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
        <textarea name="description" value={task.description} onChange={handleChange} />
      </label>

      <label>
        Colour
        <input type="color" name="color" value={task.color} onChange={handleChange} />
      </label>

      <button type="submit">
        <img src="/path/to/your/icon.svg" alt="Submit" />
      </button>
    </form>
  );
}

export default TaskForm;
