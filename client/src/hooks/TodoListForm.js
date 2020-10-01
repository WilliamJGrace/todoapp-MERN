import React, { useState } from 'react';

function TodoListForm({ createTodoList }) {
    const [value, setValue] = useState("");
  
   
  
    const handleSubmit = event => {
      event.preventDefault();
      if(!value) return;
      createTodoList(value)
      setValue("")
    }
    return (
        <>
        <p>New List:</p>
      <form onSubmit={handleSubmit}>
        <input id="nametodo"
        data-test="inputElement"
          type="text"
          className="input"
          value={value}
          placeholder="New list name"
          onChange={event => setValue(event.target.value)}
        />
      </form>
      </>
    )
  }

export default TodoListForm