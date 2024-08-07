
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';
import { useEffect , useState } from 'react';


//custom hook
// function useSemiPersistantState(){

//   const existingTodo=JSON.parse(localStorage.getItem("savedTodoList")) ?? [];
//   const [todoList, settodoList]=useState(existingTodo);

//   useEffect(()=>{
//     const todoListString= JSON.stringify(todoList) ;
//     localStorage.setItem("savedTodoList",todoListString) ;}
//     ,[todoList]);
  
//    return [todoList , settodoList] ;
// }


function App() {
  
  const [todoList ,settodoList]= useState([]);
  const [isLoading ,setIsLoading ]=useState(true) ;
  
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingTodo =
          JSON.parse(localStorage.getItem("savedTodoList")) ?? [];
        const object = {
          data: {
            todoList: existingTodo,
          },
        };
        resolve(object);
      }, 2000);
    }).then((result) => {
      const retrievedTodoList = result.data.todoList;
      settodoList(retrievedTodoList);
      setIsLoading(false);
    });
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
