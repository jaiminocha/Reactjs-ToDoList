import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList(props) {
    let customStyles = {
        height: '15vh',
    }

  return (
    <div className="container" >
        {(props.todos.length === 0) ? "Add items to your To-Do List" :
            props.todos.map((todo)=>{
                return <TodoListItem todos={todo} key={todo.id} onDelete={props.onDelete} onDone={props.onDone} />
            })
        }
        <div style={(props.todos.length <= 2) ? customStyles : {height:'5vh'}}></div>
    </div>
  )
}
