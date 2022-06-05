
import React, { useState } from 'react'
import TodoForm from './todoForm'
import {RiDeleteBinLine} from 'react-icons/ri'
import {FiEdit2} from 'react-icons/fi'

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
  const [edit, setEdit] =  useState({
      id : null,
      value : ''
  });

  const submitUpdate = value =>{
      updateTodo(edit.id, value)
      setEdit({
        id : null,
        value : ''
      })
  }

  if(edit.id){
      return <TodoForm edit = {edit} onSubmit = {submitUpdate}/>
  }
  return todos.map((todo,index) => (
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key = {index}>
         <div key= {todo.id} onClick = {() => completeTodo(todo.id)}>
             {todo.text} {todo.date1}
         </div>
         <div className='icons'>
            <RiDeleteBinLine
            onClick = {() => removeTodo(todo.id)}
            className = 'delete-icon'
            />
            <FiEdit2
            onClick = {()=> setEdit({id : todo.id, value : todo.text})}
            className = 'edit-icon'
            />
         </div>
      </div>
  ))
}

export default Todo;