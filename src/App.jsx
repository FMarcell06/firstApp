import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "reactstrap";
import { Counter } from "./components/Counter";
import { useState } from "react";
import { Toggle } from "./components/Toggle";
import { Todo } from "./components/Todo";
import { Gallery } from "./components/Gallery";
import { Frameworks } from "./components/Frameworks";

function App() {
  const [selected,setSelected] = useState(null)

  return (
    <div className="app">
      <h1 style={{textAlign:"center"}}>First react app</h1>
      <div className="d-flex gap-2 mb-3 justify-content-center">
        <Button onClick={()=>setSelected("counter")} color="primary" outline={selected!="counter"}>
          Counter
        </Button>{" "}
        <Button onClick={()=>setSelected("toggle")} outline={selected!="toggle"}>Toggle</Button>{" "}
        <Button onClick={()=>setSelected("todo")} color="success" outline={selected!="todo"}>
          Todo
        </Button>{" "}
        <Button onClick={()=>setSelected("gallery")} color="info" outline={selected!="gallery"}>
          Gallery
        </Button>{" "}
      </div>
    {selected=="counter" &&<Counter/>}
    {selected=='toggle' && <Toggle/>}
    {selected=="todo"&&<Todo/>}
    {selected=="gallery"&&<Gallery/>}
    {!selected && <Frameworks/>}
    </div>

  )
}

export default App;
