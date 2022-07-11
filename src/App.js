import './App.css';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import React, { useState, useEffect } from "react";

function App() {
  
  // Example of To-Do's 

  // { id: 1,
  //   title: 'Play Pubg',
  //   description: 'Invite friends for a team battle at 10 PM'
  // },
  // { id: 2,
  //   title: 'Watch Football',
  //   description: 'Watch Manchester United Vs Chelsea live at 12:30 AM'
  // },
  // { id: 3,
  //   title: 'Submit assignment',
  //   description: 'Complete assignment questions 10-20 and submit before monday'
  // }
  
  let initTodo;
  if (localStorage.getItem("todoslist") === null){
    initTodo = [];
  }
  else initTodo = JSON.parse(localStorage.getItem("todoslist"));

  const [todoslist, setTodos] = useState(initTodo);

  const onDelete = (todo)=>{
    // console.log("Delete Called", todo);
    
    setTodos(todoslist.filter((t)=>{
      return t !== todo;
    }));

    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }

  let addToDo = (title, desc) => {
    if (!title) return null;
    let n = 0;
    if (todoslist.length === 0) n = 0;
    else {
      n = todoslist[todoslist.length - 1].id + 1;
    }
    let mytodo = {
      id: n,
      title: title,
      description: desc,
      done: false
    };
    console.log(mytodo);
    setTodos([mytodo, ...todoslist]);

  }

  const onDone = (todo)=>{
    let doneTodo = todo;
    
    let newList = todoslist.filter((t)=>{
      return t !== todo;
    });

    let n = 0;
    if (todoslist.length === 0) n = 0;
    else {
      n = todoslist[todoslist.length - 1].id + 1;
    }
    let title = doneTodo.title;
    let desc = doneTodo.description;
    let mytodo = {
      id: n,
      title: title,
      description: desc,
      done: true
    };
    setTodos([...newList, mytodo]);

    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }

  const handleReset = ()=>{
    // todoslist.forEach((todo) => {
    //   onDelete(todo);
    // })
    if (todoslist.length === 0) {
      alert("To-Do List already empty :p");
    }
    else if (window.confirm("Are you sure you want to reset?") === true) {
      setTodos([]);
    } 
  }

  useEffect(()=>{
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }, [todoslist])

  return (
    <div className="App">
      <NavBar reset={handleReset} />

      <AddTodo addToDo={addToDo} />

      <hr />

      <TodoList todos={todoslist} onDelete={onDelete} onDone={onDone} />
      
      <Footer />
    </div>
  );
}

export default App;
