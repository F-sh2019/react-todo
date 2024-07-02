
export default function AddTodoForm(){

const handleAddTodo= (event)=>{
    event.preventDefault();
    console.log(event.target.value);
};

return (
<form onSubmit={handleAddTodo}>

<label htmlFor="todotitle"></label>
<input id="todotitle" name="title"  onChange ={handleAddTodo}/>
<button type="submit">Add</button>

</form>

);
}