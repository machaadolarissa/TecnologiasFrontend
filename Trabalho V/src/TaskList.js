import React, { useState } from 'react';
import TaskItem from './TaskItem';
import './style.css';
import { MdAdd } from 'react-icons/md'; 


const TaskList = ({ tasks, addTask, deleteTask, editTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== '') {
      addTask(taskInput);
      setTaskInput('');
    }
  };

  return (
    <div className="task-list">
      <form onSubmit={handleSubmit} className="task-form">
        <div className="input-button-container">
          <label htmlFor="taskInput" className={`task-input-label ${taskInput ? 'small-label' : ''}`}>
            Add an item
          </label>
          <input
            type="text"
            value={taskInput}
            onChange={handleInputChange}
            className="task-input"
            id="taskInput"
          />
          <button type="submit" className={`add-task-btn ${taskInput ? 'dark-grey' : ''}`}>
            <MdAdd className="plus-icon" />
          </button>
        </div>
      </form>
      <ul className="task-items">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;