import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function TaskItem({ task, index, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [isChecked, setIsChecked] = useState(false);
  const [isBlue, setIsBlue] = useState(task.toLowerCase().includes('estudar') || task.toLowerCase().includes('ler'));

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    editTask(index, editedTask);
    setIsBlue(editedTask.toLowerCase().includes('estudar') || editedTask.toLowerCase().includes('ler'));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <li className={`task-item ${isBlue ? 'blue' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span onClick={handleEdit}>{task}</span>
          <FaTimes className="delete" onClick={handleDelete} />
        </label>
      )}
    </li>
  );
}

export default TaskItem;