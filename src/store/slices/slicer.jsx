import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
        id:null,
        task:'',
        status:''
        }
    ]
}
const slice={
    name:'todos',
    initialState,
    reducers:{
        addToTodos:(state,action)=>{
            const newTodo = action.payload
            state.todos.push(newTodo)
            console.log(typeof  (state.todos))
        },
        removeFromTodos:(state,action)=>
        {
            const id =action.payload;
            console.log(id)
           const filteredTodos=state.todos.filter((todo)=>todo.id!==id)
           state.todos=filteredTodos
           console.log(filteredTodos)
        },
        changeTodoStatus:(state,action) =>
        {
            const id = action.payload
            const existingTodo=state.todos.find((todo)=>todo.id===id)
            if(existingTodo.status==='incomplete')
                existingTodo.status='complete'
            else 
                existingTodo.status='incomplete'
            
            console.log(state.todos)
        },
        editTodos:(state,action)=>
        {
            const {id,task,status} = action.payload
            const existingTodo=state.todos.find((todo)=>todo.id===id)
            if (existingTodo)
                existingTodo.task=task
                existingTodo.status=status
            
            console.log(state.todos)
        }

    }
}
export const todoSliice=createSlice(slice)
export const {addToTodos,editTodos,removeFromTodos,changeTodoStatus}=todoSliice.actions
export default todoSliice.reducer