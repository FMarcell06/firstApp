import React from "react";
import { todosData } from "../data";
import { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { IoTrashOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

export const Todo = () => {
  const [todos, setTodos] = useState(todosData);

  const handleDelete=(id)=>{
    console.log(id);
    setTodos(prev=>prev.filter(obj=>obj.id!=id))
  }

  return (
    <div>
      <ListGroup>
        {todos.map((obj) => (
          <ListGroupItem key={obj.id} className="d-flex gap-1 jusify-content-between align-items-center">
            <FaCheck style={{color:obj.done ? "green" : "gray", fontSize:"2rem"}} />
            <div style={{textDecoration:obj.done ? "line-through": "none"}}>
            {obj.descr}
            </div>
             <IoTrashOutline style={{color:"red",fontSize:"2rem"}} onClick={()=>handleDelete(obj.id)}/>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
