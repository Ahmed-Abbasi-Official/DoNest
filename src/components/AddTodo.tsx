"use client"
import { useTodos } from "@/store/Todos.Context";
import { FormEvent, useState } from "react"

const AddTodo = () => {
    const [todo,setTodo]=useState('');
    const {handleAddTodo}=useTodos();
    console.log(todo)

    // ON SUBMIT

    const handleFormSubmit = (e:FormEvent<HTMLFormElement>):void=>{
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("")
    }



  return (
    <form onSubmit={handleFormSubmit} className="flex  gap-2">
        <input 
        type="text" 
        placeholder="Write your todo"  
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        className="text-black outline-none px-4 py-1 rounded"
        />
        <button type="submit" className="bg-[#021021] border-2 border-white py-1 px-2 rounded">ADD</button>
    </form>
  )
}

export default AddTodo