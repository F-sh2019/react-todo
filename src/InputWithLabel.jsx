export  function InputWithLabel(props){
    return (
        <>
            <label htmlFor="todotitle">{props.children}</label>
            <input 
                id="todotitle" 
                name="title"
                value={props.todoTitle} 
                onChange= {props.handleTitleChange} 
            />
        </>
        )
}