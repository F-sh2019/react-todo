
export default function TodoListItem(props){
return (
    <li key={props.id}>{props.todo}</li>
);
}