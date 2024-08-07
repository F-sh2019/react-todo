
export default function TodoListItem({todo , onRemoveTodo , id}){


    return(
        <>
        <li>
            {todo} <button onClick={()=>onRemoveTodo(id)} >Remove</button>
        </li>
        </>
    );

}