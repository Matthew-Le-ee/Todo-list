import React from 'react'
import './styles.css'
import TodoList from './components/todoList'

const App = () => {
  return (
	<>
		<div className="todo-app">
			<TodoList/>
		</div>
	</>
  )
}

export default App
