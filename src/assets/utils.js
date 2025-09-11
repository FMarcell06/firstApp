export const randNr=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min
}

import axios from "axios"

const baseUrl="http://localhost:8000/"

//osszes adat lekerese

export const getTodos= async(setTodos)=>{
    const resp=await axios.get(baseUrl+"todos")
    setTodos(resp.data)
}

//todo torlese
export const deleteTodo=async (id)=>{
    await axios.delete(`${baseUrl}todos/${id}`)
}
//uj hozzaadasa
export const addTodo=async(descr)=>{
    await axios.post(baseUrl+"todos",{descr})
}
//kessze atiras
export const setDone=async(id)=>{
    await axios.patch(`${baseUrl}todos/${id}`)
}
//osszes torlese