import React, {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet'
import TodoList from './hooks/TodoList'
import TodoListForm from './hooks/TodoListForm'

import './App.css';



function App() {
  const [todoLists, setTodoLists] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)

  let uri = ''

  if (process.env.NODE_ENV === 'development'){
    uri = "http://localhost:3000"
  }
  else{
    uri = "https://mytodonotes-backend.herokuapp.com"
  }

  console.log(uri)


  const fetchTodoLists = () => {
    fetch(uri + "/api/todolists")
    .then(res => {
      return (res.json())
    })
    .then(data =>{
    //   setIsLoading(false)
      setTodoLists(data.data)
      
    }) 
  }
  useEffect(() => {
    if(!todoLists){
      fetchTodoLists()
    }
  })

  const createTodoList = value => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: value})
  };

  fetch(uri + "/api/todolist", requestOptions)
  .then(() => {
    fetchTodoLists()
  }
  )
  }

  const deleteTodoList = (index) => {
    const id = todoLists[index]._id
    const requestOptions = {
      method: 'DELETE',
  };
  fetch(`${uri}/api/todolist/${id}`, requestOptions)
  .then(
    () => {
      fetchTodoLists()
    }
  )
  }
  
  

  

  return (
    <>
    <Helmet>
      <title>My Todo Notes</title>
    </Helmet>



    <div className="app">
    {todoLists ?
      todoLists.map((todoList, index) => (
        <TodoList
    title={todoList.name}
    deleteTodoList={deleteTodoList}
    id={todoList._id}
    index={index}
    uri={uri}
    />

      ))
    
    : null

    }

    <TodoListForm
    createTodoList={createTodoList}

    />

    </div>



  
    
    
    </>
  
  );
}

export default App;
