import React from 'react';

function Task({ id, text, completed, deleteTask, toggleComplete }) {
  return (
    <div className="task" style={{ textDecoration: completed ? 'line-through' : 'none' }} onClick={() => toggleComplete(id)}>
      <span>{text}</span>
      <button onClick={() => deleteTask(id)}>Eliminar</button>
    </div>
  );
}

export default Task;
