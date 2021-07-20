import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import {Footer} from './MyComponents/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("i am onDelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
 
  const addTodo = (title , desc) => {
    console.log ("i am addingg this ", title, desc)
    let sno = todos[todos.length-1].sno +1;
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno : 1,
      title: "go to the market ",
      desc: "you have to go to the marcket today buddy!!"
    },
    {
      sno : 2,
      title: "train tickit booking  ",
      desc: "you have to book ticket for train buddy!!"
    },
    {
      sno : 3,
      title: "this is 3rd todo list  ",
      desc: "you have to go to the marcket today buddy!!"
    },
    {
      sno : 4,
      title: "this is forth 4th todo list  ",
      desc: "you have to go to the marcket today buddy!!"
    }
  ])
  return (
    <>
      <Header title="My Todos List"/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>

    </>

  );
}

export default App;
