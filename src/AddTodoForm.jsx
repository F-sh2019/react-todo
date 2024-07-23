import { useState } from 'react';
export default function AddTodoForm({onAddTodo}){

const [todoTitle , settodoTitle]= useState("");
const  handleTitleChange =(event)=>{
    const newTodoTitle=event.target.value;
    settodoTitle (newTodoTitle);
};


const handleAddTodo = (event)=>{
    event.preventDefault();
    const form= event.target ;
    const newTodo={
        title:todoTitle , id: Date.now() ,
    } ;
    onAddTodo(newTodo);
    settodoTitle("");
};



return (
<form onSubmit={handleAddTodo}>

<label htmlFor="todotitle"></label>
<input id="todotitle" name="title" value={todoTitle} onChange= {handleTitleChange} />
<button type="submit">Add</button>

</form>

);
};