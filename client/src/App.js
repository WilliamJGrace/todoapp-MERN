import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import TodoForm from './hooks/TodoForm'
import TodoItem from './hooks/TodoItem'
import './App.css';



function App() {
  const [todoItems, setTodoItems] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  let uri = ''

  if (process.env.NODE_ENV === 'development'){
    uri = "http://localhost:3000"
  }
  else{
    uri = "https://mytodonotes-backend.herokuapp.com"
  }

  console.log(uri)

  

  

  return (
    <>
    <Helmet>
      <title>My Todo Notes</title>
    </Helmet>
    <div className="app">
      <div className="todo-list">
        {isLoading ?
        <div className="todo">Loading...</div>
        :
        todoItems ?
        todoItems.map((todoItem, index) => (
          <TodoItem
            key={index}
            index={index}
            todoItem={todoItem}
            editTodoItem={editTodoItem}
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
    </>
  
  );
}

export default App;
