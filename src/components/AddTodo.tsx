"use client"
import { FormEvent, useState } from "react"

const AddTodo = () => {

    const [todo,setTodo]=useState('');
    console.log(todo)

    // ON SUBMIT

    const handleFormSubmit = (e:FormEvent<HTMLFormElement>):void=>{
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("")
    }



  return (
    <form onSubmit={handleFormSubmit}>
        <input 
        type="text" 
        placeholder="Write your todo"  
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button type="submit">ADD</button>
    </form>
  )
}

export default AddTodo