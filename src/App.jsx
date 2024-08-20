
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';
import { useEffect , useState } from 'react';

function App() {
  
  const [todoList ,settodoList]= useState([]);
  const [isLoading ,setIsLoading ]=useState(true) ;
  
  async function fetchData(){
  const options={
    method:"Get" ,
    headers:{Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`},
  } ;
  
  const url=`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

  try{
    const response = await fetch(url, options) ;
    if (! response.ok){
      throw new Err(`${response.status}`) ;
    }
    const data=await response.json();
    console.log(data);
     const Todos= data.records.map((Td)=> {return {  id:Td.id , title:Td.fields.Title }; 
          
     });
     console.log("Todo:" , Todos);
     settodoList(Todos);
     setIsLoading (false);
  }
  catch(error){
    console.log(error.message) ;
    return null;
  }
}
  useEffect(() => {
      fetchData()
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const todoListString = JSON.stringify(todoList);
      localStorage.setItem("savedTodoList", todoListString);
    }
  }, [todoList, isLoading]);


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
       {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} /> 
      )}
       
    </>
  );
}

export default App
