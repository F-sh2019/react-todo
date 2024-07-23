
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';



function App() {
 
  const [newTodo ,setNewTodo]= useState("") ;
  const [todoList, settodoList]=useState([]);

  return (
    <>
       <h1>Todo List </h1>
       <AddTodoForm onAddTodo={setNewTodo}/>
       <p>{newTodo}</p>
       <TodoList todoList={todoList} /> 
    </>
  );
}

export default App
