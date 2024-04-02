import React from 'react';

function Task({ task, id, text, completed, deleteTask, toggleComplete }) {
  

  return (
    <>
      <li >{task}</li>
      <div
        className="task"
        style={{ cursor: 'pointer', textDecoration: completed ? 'line-through' : 'none' }}
        onClick={() => toggleComplete(id)}
      ></div>
      <button type="button" onClick={() => deleteTask(id)}>
        Eliminar
      </button>
    </>
  );
}

export default Task;
