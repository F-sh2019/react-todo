
export default function TodoListItem({todo , onRemoveTodo , id}){
   function handelRemove()
   {
    onRemoveTodo(id) ;
   }

    return(
        <>
        <li>
            {todo} <button onClick={handelRemove} >Remove</button>
        </li>
        </>
    );

}