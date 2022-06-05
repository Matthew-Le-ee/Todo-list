import React, {useState, useEffect, useRef} from 'react'
import moment from 'moment'

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);
    
  useEffect(()=> {
      inputRef.current.focus();
  })

  const handleSubmit = (e) =>{
      e.preventDefault();

      props.onSubmit({
          id : Math.floor(Math.random() * 100),
          text : input,
          date1 : moment(new Date()).format("MMMM DD, YYYY HH:mm")
      })
      setInput('')
  }
  
  const handleChange = (e) =>{
      setInput(e.target.value)
  }



  return (
		<form onSubmit={handleSubmit} className="todo-form">
			{props.edit ? (
				<>
					<input
						type="text"
						placeholder="Update..."
						value={input}
						onChange={handleChange}
						name='text'
						ref={inputRef}
						className="todo-input edit"
					/>

					<button onClick={handleSubmit} className="todo-button edit">
						Update
					</button>
				</>
			) : (
                <>
				<input 
                type="text" 
                placeholder='Add...'
                value={input}
                onChange = {handleChange}
                name = 'text'
                ref = {inputRef}
                className = 'todo-input'    
                />

                <button onClick = {handleSubmit} className = 'todo-button'>
                    Add
                </button>
                </>
			)}
		</form>
  );
}

export default TodoForm;