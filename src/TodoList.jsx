import TodoListItem from "./TodoListItem";
//const todoList=[
    // { id:0 , title:"Study the  React Book"},
    // { id:1 , title:"Watch Lesson\'s Video"},
    // { id:2 , title:"Participate in Mentor group meeting"},
    // { id:3 , title:"Submit the assignment "}];
  
export default function TodoList(props){
    
return (
   
    <ul >
      {
      props.todoList.map((item)=><TodoListItem key={item.id} todo={item.title} id={item.id}/>)
      }
    </ul>
    
)
}