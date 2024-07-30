import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
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
        <InputWithLabel todoTitle={todoTitle}  handleTitleChange={handleTitleChange} label="Add a new Todo"/>
        <button type="submit">Add</button>
        </form>
    );
};