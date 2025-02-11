"use client"

import { createContext, useContext, useState } from "react";

// * TODOS TYPE

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

// * TODOS CONTEXT TYPE

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    handleTodoDelete:(id:string)=>void;
    toggleTodoAsCompleted:(id:string)=>void;
}



export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>(()=>{
        const newTodos = localStorage.getItem("todos") || "[]";
        return JSON.parse(newTodos) as Todo[] ;
    });

    // * ADD TODO

    const handleAddTodo = (task: string) => {
        setTodos((prev: Todo[]) => {
            const newTodo: Todo[] = [
                {
                    id: Math.random().toString(),
                    task,
                    completed: false,
                    createdAt: new Date()
                },
                ...prev
            ]
            localStorage.setItem("todos",JSON.stringify(newTodo));
            return newTodo;
        })
    }

    // * TOGGLE COMPLETED

    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev)=>{
            const newTodos=prev.map((task)=>{
                if(task.id===id){
                    return {...task,completed:!task.completed}
                }
                return task;
            })
            localStorage.setItem("todos",JSON.stringify(newTodos));
            return newTodos;
        })
    };

    // * DELETE TODO

    const handleTodoDelete=(id:string)=>{
       setTodos((prev)=>{
        const newTodos=prev.filter((task)=>{
            return task.id !== id;
        })
        localStorage.setItem("todos",JSON.stringify(newTodos));
        return newTodos;
       })
    }
    

    return (
        <todosContext.Provider value={{ todos, handleAddTodo , toggleTodoAsCompleted , handleTodoDelete }}>
            {children}
        </todosContext.Provider>
    )
}

export function useTodos() {
    const todosContextValue = useContext(todosContext);
    if (!todosContextValue) {
        throw new Error("Use Todo used outside of provider");
    }
    return todosContextValue;
}