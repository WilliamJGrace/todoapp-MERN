import React, { useState } from 'react';

function TodoItem ({ todoItem, index, editTodoItem, completeTodoItem, uncompleteTodoItem, deleteTodoItem }) {
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateValue, setUpdateValue] = useState("");
  
    const handleSubmit = event => {
      event.preventDefault();
      if(!updateValue) return;
      editTodoItem(index, updateValue)
      setUpdateValue("")
      setIsUpdating(false)
    }
  
    return (
    <div 
    className="todo"
    style={{ textDecoration: todoItem.isCompleted ? "line-through" : "" }}
    >{todoItem.name}
    {!isUpdating ? 
     <div>
     <button onClick={() => setIsUpdating(true)}>Edit</button>
   </div> : 
   <div>
   <form onSubmit={handleSubmit}>
   <input
     type="text"
     className="input"
     value={updateValue}
     onChange={event => setUpdateValue(event.target.value)}
   />
  </form>
  </div>
    
  }
    {todoItem.isCompleted ?
    <div>
      <button onClick={() => uncompleteTodoItem(index)}>UnComplete</button>
    </div> :
    <div>
    <button onClick={() => completeTodoItem(index)}>Complete</button>
  </div>
  
    }
    <div>
    <button onClick={() => deleteTodoItem(index)}>X</button>
    </div>
    </div>
    )
  } 
  
  
  
export default TodoItem