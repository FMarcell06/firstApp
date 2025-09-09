import React from 'react'
import { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export const NewTodo = () => {
    const [descr,setDescr] = useState("")
    console.log("renderelodik a NewTodo: ",descr);
    
    const handleSubmit =()=>{

    }

    return (
        <div>
            <Form style={{display:"flex",gap:"5px",maxWidth:"600px"}}>
                <FormGroup style={{}}>
                    <Input
                        placeholder="new item"
                        type="text"
                        value={descr}
                        onChange={(e)=>setDescr(e.target.value)}
                    />
                </FormGroup>
                <Button onClick={handleSubmit()}>Add</Button>
            </Form>

        </div>
    )
}

