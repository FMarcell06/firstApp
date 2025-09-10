import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { quotesFromDatabase } from '../data';
import { randNr } from '../assets/utils';

export const RandomQuote = () => {
      const [randomQuote,setRandomQuote] = useState(quotesFromDatabase);
      const [selected,setSelected] = useState(0)
        console.log(randomQuote,selected);
        
        const getRandomQuote=()=>{
            
            setSelected(randNr(0,randomQuote.length-1))
        }
  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <Button style={{width:"50%",margin:"auto"}} onClick={getRandomQuote} >Get random quote</Button>
      <p>{randomQuote[selected]}</p>
    </div>
  )
}
