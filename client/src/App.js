import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState(
    [{"name": 'do the dishes'},
    {"name": 'wash clothes'},
    {"name": 'clean car'}
  ]
  )
  
  const TodoItem = ({ todoItem }) => <div className="todo">{todoItem.name}</div>;
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
      </div>
    </div>
  
  );
}

export default App;
