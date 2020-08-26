import React, { useState } from 'react';

function TodoForm({ addTodoItem }) {
    const [value, setValue] = useState("");
  
   
  
    const handleSubmit = event => {
      event.preventDefault();
      if(!value) return;
      addTodoItem(value)
      setValue("")
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </form>
    )
  }

export default TodoForm