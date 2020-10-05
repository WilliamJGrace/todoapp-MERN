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
        <input id="nametodo"
        data-test="inputElement"
          type="text"
          className="input"
          value={value}
          placeholder="Add a Todo Item"
          onChange={event => setValue(event.target.value)}
        />
      </form>
    )
  }

export default TodoForm