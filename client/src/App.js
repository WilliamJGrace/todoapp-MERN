import React, { useState, useEffect } from 'react';
import './App.css';

const TodoItem = ({ todoItem }) => <div className="todo">{todoItem.name}</div>;



function TodoForm({ addTodoItem }) {
  const [value, setValue] = useState("");

 

  const handleSubmit = event => {
    event.preventDefault();
    if(!value) return;
    // addTodoItem(value)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: value })
  };
  fetch("http://localhost:3000/api/todoitem", requestOptions)
  .then(response => response.json())
  // .then(data => add(data.id));
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
    []
  )
  useEffect(() => {
    fetch("http://localhost:3000/api/todoitems")
      .then(res => res.json())
      .then(data =>{
        setTodoItems(data.data)
      }) 
  })

  const addTodoItem = name => {
    const newTodoItems = [...todoItems, { name }];
    setTodoItems(newTodoItems)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todoItems.map((todoItem, index) => (
          <TodoItem
            key={index}
            index={index}
            todoItem={todoItem}
          />
        ))}
        <TodoForm addTodoItem={addTodoItem} />
      </div>
    </div>
  
  );
}

export default App;
