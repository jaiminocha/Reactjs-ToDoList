import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if (!title){
            alert("Title cannot be left blank.");
        }
        props.addToDo(title, desc);
        setTitle("");
        setDesc("");
    }

  return (
    <div className="container">
        <h1>To-Do List</h1> 
        
        <Form className="justify-content-md-center" style={{position: 'relative', left: '25%'}} onSubmit={submit}>
        
            <Card border="light" style={{ width: '50%' }}>
            <Card.Header>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '1.3rem'}}>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter title" />
                    <Form.Text className="text-muted">
                    Eg. Buy fruits
                    </Form.Text>
                </Form.Group>

            </Card.Header>
            <Card.Body>
            <Card.Title>
            
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control style={{height: '10vh'}} type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter description" />
                </Form.Group>
                <Button style={{width: '10vw'}}variant="outline-dark" type="submit">
                    Add
                </Button>

            </Card.Title>
            
            </Card.Body>
            </Card>
            <br />

        </Form>

        {/* <Form calssName="my-3" onSubmit={submit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter title" />
                <Form.Text className="text-muted">
                Eg. Buy fruits
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter description" />
            </Form.Group>
            <Button variant="outline-dark" type="submit">
                Add
            </Button>
        </Form> */}
    </div>
  )
}
