import React from "react";
//import { todosData } from "../data";
import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { IoTrashOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { NewTodo } from "./NewTodo";
import { TodoSummary } from "./TodoSummary";
import { useEffect } from "react";
import { addTodo, deleteTodo, getTodos, setDone } from "../assets/utils";

export const Todo = () => {
  const [todos, setTodos] = useState(null);
  console.log("renderelodik a Todo",todos);

  useEffect(()=>{
    getTodos(setTodos)
  },[])

/*  
  const handleDelete=(id)=>{
    console.log(id);
    setTodos(prev=>prev.filter(obj=>obj.id!=id))
  }

  const handleDone=(id)=>{
    console.log("handleDone:",id);
    setTodos(prev=>
      prev.map(obj=>obj.id==id ? {...obj,done:!obj.done} : obj))
    console.log(todos);
        
  }

  const clearTodos=()=>{
    setTodos([])
  }

  const handleAdd=(descr)=>{
    const newTodo={id: Date.now(),
      descr,
      done:false
    }
    setTodos(prev=>[...prev,newTodo])
  }
*/
  const handleDelete=async(id)=>{
    await deleteTodo(id)//az adatbazisban megtortenik a modositas
    getTodos(setTodos)
  }
  const handleAdd=async(descr)=>{ 
    await addTodo(descr)//az adatbazisban megtortenik a modostias
    getTodos(setTodos)
  }
  const handleDone=async(id)=>{
    await setDone(id)
    getTodos(setTodos)
  }
  const clearTodos=()=>{}


  return (
    <div style={{maxWidth:"600px", display:"flex",alignItems:"center",flexDirection:"column",margin:"auto"}}>
      <NewTodo handleAdd={handleAdd}/>
      <Button onClick={clearTodos}><IoTrashOutline style={{color:"red",fontSize:"2rem"}}/></Button>
      <ListGroup>
        {todos && todos.map((obj) => (
          <ListGroupItem key={obj.id} className="d-flex gap-1 jusify-content-between align-items-center">
            <FaCheck style={{color:obj.done ? "green" : "gray", fontSize:"2rem"}} onClick={()=>handleDone(obj.id)}/>
            <div style={{textDecoration:obj.done ? "line-through": "none"}}>
            {obj.descr}
            </div>
             <IoTrashOutline style={{color:"red",fontSize:"2rem"}} onClick={()=>handleDelete(obj.id)}/>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/*<TodoSummary todos={todos}/>*/}
    </div>
  );
};
