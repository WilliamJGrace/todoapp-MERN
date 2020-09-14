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

  const fetchTodoItems = () => {
    fetch(uri + "/api/todoitems")
    .then(res => {
      return (res.json())
    })
    .then(data =>{
      setIsLoading(false)
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

  fetch(uri + "/api/todoitem", requestOptions)
  .then(() => {
    fetchTodoItems()
  }
  )
  }

  const editTodoItem = (index, updateValue) => {
    const id = todoItems[index]._id
    const isCompleted = todoItems[index].isCompleted
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: updateValue, isCompleted: isCompleted })
  };
  fetch(`${uri}/api/todoitem/${id}`, requestOptions)
  .then(
    () => {
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
  fetch(`${uri}/api/todoitem/${id}`, requestOptions)
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
  fetch(`${uri}/api/todoitem/${id}`, requestOptions)
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
  fetch(`${uri}/api/todoitem/${id}`, requestOptions)
  .then(
    () => {
      fetchTodoItems()
    }
  )
  }

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
