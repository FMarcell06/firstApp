import React from 'react'
import { useState } from 'react'
import { FaDiceOne, FaDiceTwo, FaDiceThree,FaDiceFour,FaDiceFive,FaDiceSix} from "react-icons/fa";
import { randNr } from '../assets/utils';

export const Dice = () => {
    const [diceNumber,setDiceNumber] = useState(1)

    const diceComponents={
        1:<FaDiceOne size={100}/>,
        2:<FaDiceTwo size={100}/>,
        3:<FaDiceThree size={100}/>,
        4:<FaDiceFour size={100}/>,
        5:<FaDiceFive size={100}/>,
        6:<FaDiceSix size={100}/>
    }

  return (
    <div>
      <h1>Dice roller</h1>
      <div>{diceComponents[diceNumber]}</div>
      <button onClick={()=>setDiceNumber(randNr(1,6))}>Roll dice</button>
    </div>
  )
}
