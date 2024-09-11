import styles from "./TodoListItem.module.css"
export default function TodoListItem({todo , onRemoveTodo , id}){


    return(
         <section className={styles.data}>
        <li className = {styles.ListItem}>{todo}
            <button  onClick={()=>onRemoveTodo(id) }>-</button>
        </li>
         </section>
    );

}