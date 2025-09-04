import React from "react";
import { useState } from "react";
import { Spinner } from "reactstrap";

export const MyImage = ({ nr,loading,setLoading }) => {
  console.log(nr);
  const randNum = Math.floor(Math.random() * 67);
  console.log(randNum);


  const url = `https://picsum.photos/id/${nr + randNum}/200/300`;
  console.log(url);

  return (
    <div>   
        {loading &&
              <Spinner
              color="primary"
              style={{
                height: "3rem",
                width: "3rem",
              }}
            >
              Loading...
            </Spinner>
        }

      <img
        style={{
          width: "50%",
          margin:"0 auto",
          boxShadow: "3px 3px black, -1em 0 0.4em black",
          transform: `translateZ(${randNum}px)`,
          transition:"0.3s",
          height: "350px",
          filter: `saturate(${(randNum*randNum)})`,
          transform: "rotate3d(2, -1, -1, -0.2turn)",
          transform: `skew(${randNum}deg, ${randNum}deg)`,
          display:loading?"none":"block"
        }}
        src={url}
        alt=""
        onLoad={()=>setLoading(false)}
        onError={()=>setLoading(false)}
      />
    </div>
  );
};
