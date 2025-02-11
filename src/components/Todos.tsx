"use client"

import { useTodos } from "@/store/Todos.Context"
import { useSearchParams } from "next/navigation";

const Todos = () => {
    const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodos();
    const searchParams = useSearchParams();

    const todosFilter = searchParams.get("todos");
    let filterTodos = todos;

    if (todosFilter === "active") {
        filterTodos = filterTodos?.filter((prev) => !prev.completed);
    } else if (todosFilter === "completed") {
        filterTodos = filterTodos?.filter((prev) => prev.completed);
    }


    return (
        <ul>
            {
                filterTodos?.map((todo) => {
                    return <li key={todo.id} className="flex w-[80%] justify-between items-center">
                       <div className="flex items-center gap-8">
                       <input type="checkbox" name="" id={`todo-${todo?.id}`} checked={todo?.completed}
                            onChange={() => { toggleTodoAsCompleted(todo.id) }}
                        />
                        <label htmlFor={`todo-${todo?.id}`} className="text-sm">{todo?.task}</label>
                       </div>
                        {
                            todo?.completed && (
                                <button type="button" onClick={() => handleTodoDelete(todo?.id)} className="bg-red-800 px-1 border-white rounded py-.5 text-sm" >Delete</button>
                            )
                        }
                    </li>
                })
            }
        </ul>
    )
}

export default Todos