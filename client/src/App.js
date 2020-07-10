import React, { useState, useEffect } from 'react';
import './App.css';

function TodoItem ({ todoItem, index, completeTodoItem, uncompleteTodoItem, deleteTodoItem }) {
  return (
  <div 
  className="todo"
  style={{ textDecoration: todoItem.isCompleted ? "line-through" : "" }}
  >{todoItem.name}
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

function App() {
  const [todoItems, setTodoItems] = useState(
    null
  )

  const fetchTodoItems= () => {
    fetch("http://localhost:3000/api/todoitems")
    .then(res => res.json())
    .then(data =>{
      setTodoItems(data.data)
      console.log("call")
    }) 
  }
  useEffect(() => {
    if(!todoItems){
      fetchTodoItems()
    }
  })

  const addTodoItem = value => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: value })
  };
  fetch("http://localhost:3000/api/todoitem", requestOptions)
  .then(() => {
    fetchTodoItems()
  }
  )
  }

  const completeTodoItem = index => {
    const id = todoItems[index]._id
    const name = todoItems[index].name
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, isCompleted: true })
  };
  fetch(`http://localhost:3000/api/todoitem/${id}`, requestOptions)
  .then(
    () => {
      fetchTodoItems()
    }
  )
  }

  const uncompleteTodoItem = index => {
    const id = todoItems[index]._id
    const name = todoItems[index].name
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, isCompleted: false })
  };
  fetch(`http://localhost:3000/api/todoitem/${id}`, requestOptions)
  .then(
    () => {
      fetchTodoItems()
    }
  )
  
  }

  const deleteTodoItem = index => {
    const id = todoItems[index]._id
    const requestOptions = {
      method: 'DELETE',
  };
  fetch(`http://localhost:3000/api/todoitem/${id}`, requestOptions)
  .then(
    () => {
      fetchTodoItems()
    }
  )
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todoItems ?
        todoItems.map((todoItem, index) => (
          <TodoItem
            key={index}
            index={index}
            todoItem={todoItem}
            completeTodoItem={completeTodoItem}
            uncompleteTodoItem={uncompleteTodoItem}
            deleteTodoItem={deleteTodoItem}
          />
        ))
        :
        null
        
      }
        <TodoForm addTodoItem={addTodoItem} />
      </div>
    </div>
  
  );
}

export default App;