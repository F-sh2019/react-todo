
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';



function App() {
 
  
  const [todoList, settodoList]=useState([]);
  function addTodo(newTodo){
    settodoList((prevousTodoList)=> [...prevousTodoList , newTodo]);
  }

  return (
    <>
       <h1>Todo List </h1>
       <AddTodoForm onAddTodo={addTodo}/>
       <TodoList todoList={todoList} /> 
    </>
  );
}

export default App
