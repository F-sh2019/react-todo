
const todoList=[
    { id:0 , title:"Study the  React Book"},
    { id:1 , title:"Watch Lesson\'s Video"},
    { id:2 , title:"Participate in Mentor group meeting"},
    { id:3 , title:"Submit the assignment"}];
  
export default function TodoList(){
    
return (
   
    <ul >
      {todoList.map(({id , title})=>
      ( <li key={id}>{title}</li>)
      )}
    </ul>
    
)
}