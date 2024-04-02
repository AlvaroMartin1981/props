import { useState } from 'react';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    setTasks([...tasks, {id:tasks.length +1,text, completed: false}]);
    };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id));
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map((task) =>  
      task.id === taskId ? { ...task, completed : !task.completed } : task
    ))
  }


  return (
    <>
    <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
      {tasks.map(task => (
        <Task 
          key={task.id} 
          id={task.id} 
          text={task.text} 
          completed={task.completed} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </>
  );
};

export default App;
