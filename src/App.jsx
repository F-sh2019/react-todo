import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const todoList=[
  { id:0 , title:"Study the  React Book"},
  { id:1 , title:"Watch Lesson's Video"},
  { id:2 , title:"Participate Mentor group meeting"},
  { id:3 , title:"Submit the assignment"}];

function App() {
 
  return (
    <>
      <h1>Todo List</h1>
      <ul >
        {/* Map over the todoList array */}
      {todoList.map(function(item){
        return <li key={item.id}>{item.title}</li>
      })}
      </ul>
    </>
  )
}

export default App
