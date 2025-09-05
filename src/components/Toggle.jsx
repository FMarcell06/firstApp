import React from "react";
import { Button } from "reactstrap";
import { LuSmile } from "react-icons/lu";
import { FaRegSadCry } from "react-icons/fa";
import { useState } from "react";

export const Toggle = () => {
  const [isHappy, setIsHappy] = useState(true);

  return (
    <div>
      <Button outline onClick={()=>setIsHappy(!isHappy)}>Are you happy?</Button>
      <div>
        {isHappy ? <LuSmile style={{ fontSize: "3rem", color: "green" }} /> :
        <FaRegSadCry style={{ fontSize: "3rem", color: "red" }} />}
      </div>
    </div>
  );
};
