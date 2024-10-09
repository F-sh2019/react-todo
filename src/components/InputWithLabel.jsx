import {useRef , useEffect} from "react"
import PropTypes from 'prop-types';
export default function InputWithLabel(props){

    const inputRef =useRef() ;
    
    useEffect(()=>{
        inputRef.current.focus
    }) ; 

   
    return (
        <>
            <label htmlFor="todotitle">{props.Children}</label>
            <input 
                id="todotitle" 
                name="title"
                value={props.todoTitle} 
                onChange= {props.handleTitleChange} 
                ref={inputRef}
            />
        </>
        )
}
InputWithLabel.propTypes = {
    todoTitle: PropTypes.string.isRequired, 
    handleTitleChange: PropTypes.func.isRequired, 
    children: PropTypes.node.isRequired, 
};