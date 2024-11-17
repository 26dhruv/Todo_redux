import { useDispatch, useSelector } from "react-redux";
import { addToTodos } from "../store/slices/slicer";
import { useRef, useState } from "react";
import TodoList from "./TodoList";

function TodoForm() {
  const dispatch = useDispatch()
  const [text,setText] =useState('')
  const todoInput=useRef(null)
  const todos = useSelector((state)=>state.todos.todos)
    const handleSubmit= e =>
    {
        e.preventDefault()
        if(text===''){
            return
        }
        dispatch(addToTodos({
            id:Math.floor(Math.random()*10000),
            task:text,
            status:'incomplete'
        }))
        todoInput.current.value=''
        todoInput.current.focus()

    }
    return ( <div className="flex  flex-col " >
        <form onSubmit={handleSubmit} className="flex flex-row">
            <input type="text" name="Todo" id="Todo" placeholder={'Enter Task'} className="m-4" onChange={e=>setText(e.target.value)} ref={todoInput}/>
            <button>Add Task</button>
        </form>
            <TodoList todos={todos}/>
    </div> );
}

export default TodoForm;