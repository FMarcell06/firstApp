import React from "react";
import { Button, Spinner } from "reactstrap";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from "react";
import { MyImage } from "./MyImage";

export const Counter = () => {
  const [nr, setNr] = useState(0);
  const [loading, setLoading] = useState(true);

  const decrement=()=>{
    setNr(nr-1)
    setLoading(true)
  }

  const increment=()=>{
    setNr(nr+1)
    setLoading(true)
  }

  return (
    <div>
      <div className="p-5 ">
        <Button color="info" onClick={increment} outline>
          <FaCirclePlus />
        </Button>
        <Button
          color={nr >= 0 ? "success" : "danger"}
          style={{ backgroundColor: nr >= 0 ? "green" : "red", color: "white" }}
          outline
        >
          {nr}
        </Button>
        <Button color="danger" onClick={decrement} outline>
          <FaMinusCircle />
        </Button>
        {/*itt jelenjen meg egy kep, aminek az idexet a nr adja*/}
      </div>
      <div>
        {nr > 0 && <MyImage nr={nr} loading={loading} setLoading={setLoading}/>}
      </div>
    </div>
  );
};
