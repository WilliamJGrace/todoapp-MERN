import React, {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet'
import TodoList from './hooks/TodoList'

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
    id={todoList._id}
    index={index}
    uri={uri}
    />

      ))
    
    : null

    }

    </div>



  
    
    
    </>
  
  );
}

export default App;
