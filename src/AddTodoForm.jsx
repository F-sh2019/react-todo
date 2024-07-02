
export default function AddTodoForm(props){

const handleAddTodo= (event)=>{
    event.preventDefault();
    const form= event.target ;
    const input = form.querySelector("input");
    const todoTitle = input.value;
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    form.reset();
};

return (
<form onSubmit={handleAddTodo}>

<label htmlFor="todotitle"></label>
<input id="todotitle" name="title"  />
<button type="submit">Add</button>

</form>

);
}