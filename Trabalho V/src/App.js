import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1 className="dashboard-title">
        <FaBars className="icon" /> Dashboard
      </h1>
      <TaskList tasks={tasks} addTask={addTask} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;