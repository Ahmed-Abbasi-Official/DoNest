import { createContext, useState } from "react";

export type Todo={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}

export const todosContext = createContext(null);

export const TodosProvider = (children:{children:React.ReactNode}):void=>{
    const [todos,setTodos]=useState<Todo[]>([]);

    const handleAddTodo=(task:string)=>{
        setTodos((prev:any)=>{
            const newTodo:Todo[]=[
                {
                    id:Math.random().toString(),
                    task,
                    completed:false,
                    createdAt:new Date()
                },
                ...prev
            ]
        })
    }

return (
    <todosContext.Provider value={{todos,handleAddTodo}}>
        {children}
    </todosContext.Provider>
)
}