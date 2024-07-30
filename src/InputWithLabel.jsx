export default function InputWithLabel(props){
return (<>
    <label htmlFor="todotitle">{props.label}</label>
    <input id="todotitle" name="title" value={props.todoTitle} onChange= {props.handleTitleChange} />
    </>
)
}