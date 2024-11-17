import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { changeTodoStatus, editTodos, removeFromTodos } from "../store/slices/slicer";
export default function TodoList({ todos }) {
    const dispatch = useDispatch()
    const [isEditing,setEditing]=useState(false)
    const [updatedText,setUpdatedText]=useState(null)
    const [isChecked,setIsChecked]=useState(false)
    const handleEdit=(id,text)=>
    {
        if(text===''||text===null)
        {
          setEditing(null)
          setUpdatedText(null)
          return;
        }
        console.log(todos)
        console.log(id,text)
        dispatch(editTodos({id:id,task:text,status:'incomplete'}))
        setEditing(null)
        setUpdatedText(null)

    }
    const handleDelete=(id)=>
    {
      console.log(id)
      const confirmDelete=window.confirm("are u sure you wanna delete the task ?")
      if(confirmDelete)
      {
        dispatch(removeFromTodos(id))
      }
      else{return}
    }
    const handleStatusChange=(id)=>
    {
      if(isChecked)
      {
        setIsChecked(false)
      }
      else
      {
        setIsChecked(true)
      }
      dispatch(changeTodoStatus(id))
    }
    return (
      <div className="p-4">
        <ul className="space-y-4">
          {todos.filter((todo) => todo.task !== "").map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-2 border ${todo.status==='complete'?'bg-green-400 line-through':'bg-gray-400'} ` }
            >
                 <span className="flex-1">
            {isEditing==todo.id?<input type="text" value={updatedText===null?todo.task:updatedText} onChange={(e)=>setUpdatedText(e.target.value)}/>:todo.task}
       
             </span> 
              <div className="space-x-2">
                {isEditing===todo.id?( 
                                <button className=" px-2 py-1" onClick={()=>handleEdit(todo.id,updatedText)}>
                                <FaSave/>
                                </button>
                ):( 
                <button className=" px-2 py-1" onClick={()=>{setEditing(todo.id);}}>
                <CiEdit/>
                </button>
                  )}
               
                <button className="bg-red-500 px-2 py-1 rounded text-white" onClick={()=>handleDelete(todo.id)}>
                  <MdDelete/>
                </button>
                <input type="checkbox" className="ml-2"  onClick={()=>handleStatusChange(todo.id)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  