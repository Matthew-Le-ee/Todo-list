import React, {useState} from 'react'
import TodoForm from './todoForm'
import Todo from './todo';
const TodoList = () => {
     const [todos, setTodos] = useState([]);

     const addTodo = todo => {
         if(!todo.text || /^\s*$/.test(todo.text)){
             return;
         }
         const newTodos = [todo,...todos];
         setTodos(newTodos)
         // console.log( todo, ...todos);
     }

     const updateTodo = (todoId, newValue) => {
        if (!newValue || /^\s*$/.test(newValue)) {
			return;
		}
        setTodos(prev => prev.map(hi => (hi.id === todoId ? newValue : hi)));
     }

     const removeTodo = id => {
         const removedArr = [...todos].filter(hi=> hi.id !== id);
         setTodos(removedArr);
     }

     const completeTodo = id => {
         let updateTodos = todos.map(todo => {
             if(todo.id === id){
                 todo.isComplete = !todo.isComplete;
             }
             return todo;
         });
         setTodos(updateTodos);
     }

  return (
    <>
        <h1>Todo List React</h1>
        <TodoForm onSubmit = {addTodo}/>
        <Todo
        todos = {todos}
        completeTodo = {completeTodo}
        removeTodo = {removeTodo}
        updateTodo = {updateTodo}
        />
    </>
  )
}

export default TodoList
