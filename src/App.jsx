
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';
import { useEffect , useState } from 'react';


//custom hook
function useSemiPersistantState(){

  const existingTodo=JSON.parse(localStorage.getItem("savedTodoList")) ?? [];
  const [todoList, settodoList]=useState(existingTodo);

  useEffect(()=>{
    const todoListString= JSON.stringify(todoList) ;
    localStorage.setItem("savedTodoList",todoListString) ;}
    ,[todoList]);
  
   return [todoList , settodoList] ;
}


function App() {
  
  const [todoList ,settodoList]= useSemiPersistantState();
  
  function addTodo(newTodo){
    settodoList((prevousTodoList)=> [...prevousTodoList , newTodo]);
  }

  function removeTodo(id){
    
    const filteredTodoList = todoList.filter((todo) => todo.id !== id);
    
    settodoList(filteredTodoList);
  }
  return (
    <>
       <h1>Todo List </h1>
       <AddTodoForm onAddTodo={addTodo}/>
       <TodoList todoList={todoList} onRemoveTodo={removeTodo} /> 
    </>
  );
}

export default App
