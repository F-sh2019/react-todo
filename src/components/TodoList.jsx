import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types';

export default function TodoList({todoList ,onRemoveTodo}){
    
return (
   
    <ul >
      { todoList.map((item)=>(
          <TodoListItem key={item.id} todo={item.title} id={item.id}
            onRemoveTodo={onRemoveTodo} />))
      }
    </ul>
    
)
}
TodoList.PropTypes={
  todoList:PropTypes.func,
  onRemoveTodo: PropTypes.func,
  

} ;