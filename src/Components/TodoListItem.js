import React from 'react'
import Button from 'react-bootstrap/Button';

export default function TodoListItem({todos, onDelete, onDone}) {
    const customStyles = {
        bottomMargin: '10px'
    }
    let cs =  todos.done;
    const customStyles1 = {
        textDecoration: cs && 'line-through'
    }
    const customStyles2 = {
        display: cs && 'none' 
    }
  return (
    <div style={customStyles}>
        <h2 style={customStyles1}>{todos.title}</h2>
        <p>{todos.description}</p>
        <Button variant="danger" onClick={()=>{onDelete(todos)}}>Delete</Button>{' '}
        <Button variant="success" style={customStyles2} onClick={()=>{onDone(todos)}}>Done</Button>{' '}
        <hr />
    </div>
  )
}
