
export default function TodoListItem(props){
return (
    (<li key={props.key}>{props.todo}</li>)
);
}