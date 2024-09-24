import styles from "./TodoListItem.module.css"
import PropTypes from 'prop-types';

export default function TodoListItem({todo , onRemoveTodo , id}){


    return(
         <section className={styles.data}>
        <li className = {styles.ListItem}>{todo}
            <button  onClick={()=>onRemoveTodo(id) }>-</button>
        </li>
         </section>
    );

}
TodoListItem.PropTypes={
    todo:PropTypes.func,
    onRemoveTodo: PropTypes.func,
    id:PropTypes.func,
  
  } ;