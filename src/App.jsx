
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';
import { useEffect , useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  const [todoList ,settodoList]= useState([]);
  const [isLoading ,setIsLoading ]=useState(true) ;
  
  async function addTodoItem(newTodoTitle) {
    
    const options = {
      method: "POST",
      headers: {
        Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              
              title: newTodoTitle,
            },
          },
        ],
      }),
    };
     
    const url=`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
  
    try {
      const response = await fetch(url, options);
      console.log(response )
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
  
      const data = await response.json();
  
      const newTodoList = {
        title: data.records[0].fields.title,
        id: data.records[0].id,
      };
  
      settodoList((prevousTodoList) => [newTodoList, ...prevousTodoList]);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }


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
     const Todos= data.records.map((Td)=> {return {  id:Td.id , title:Td.fields.title }; 
          
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

  
  function removeTodo(id){
    
    const filteredTodoList = todoList.filter((todo) => todo.id !== id);
    
    settodoList(filteredTodoList);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <h1>Todo List </h1>
          <AddTodoForm onAddTodo={addTodoItem}/>
          {isLoading ? (
            <p>Loading...</p>
            ) : (
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} /> 
            )}
            </>
            }>
          
        </Route>
        <Route path="/new" element={<h1>New TodoList</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
