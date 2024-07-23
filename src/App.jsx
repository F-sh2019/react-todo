
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';

import { useEffect , useState } from 'react';


function App() {
 
  const existingTodo=JSON.parse(localStorage.getItem("savedTodoList")) ?? [];
  const [todoList, settodoList]=useState(existingTodo);

  useEffect(()=>{
    const todoListString= JSON.stringify(todoList) ;
    localStorage.setItem("savedTodoList",todoListString) ;
  },[todoList]);

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
