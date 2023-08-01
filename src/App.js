import React, { useState } from 'react';
import './App.css';
import Task from './Task.js'
import './task.css';
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {

    setNewTask(event.target.value);
  }

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        completed: false,
      }
      setTodoList([...todoList, task]);
      setNewTask("")
    }
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  }

  const handleUpdate = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true }
        } else {
          return task;
        }
      })
    )
  }

  const handleDelete = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  return (
    <div className="App">

      <div className='addList'>
        <label >Todo List</label>
        <input onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={newTask}
          type="text" />
        <button className='button' onClick={handleAdd} >Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        })}
      </div >
    </div >
  );
}

export default App;
