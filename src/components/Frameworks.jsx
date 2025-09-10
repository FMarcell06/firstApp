import React, { useState } from 'react'
import { frontendFrameworks } from '../data';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { RandomQuote } from './RandomQuote';

export const Frameworks = () => {
  const [frameworks, setFrameworks] = useState(frontendFrameworks);
  
  console.log("renderelodik a Todo");
  return (
    <div>
      <ListGroup style={{display:"flex",gap:"5px",flexDirection:"column",textAlign:"center"}}>{
          frameworks.map((obj,index)=>
            <ListGroupItem key={index}>{obj}</ListGroupItem>
  )}</ListGroup>
        <RandomQuote/>
    </div>
  )
}


