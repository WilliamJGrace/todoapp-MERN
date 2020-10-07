import React, {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TodoList from './hooks/TodoList'
import TodoListForm from './hooks/TodoListForm'

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  todoList: {
    marginTop: '20px',
 
    width: '400px',
    
    
  },
}));



function App() {
  const [todoLists, setTodoLists] = useState(null)
  const [isLoadingLists, setIsLoadingLists] = useState(true)
  const classes = useStyles();

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
      setIsLoadingLists(false)
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
   

      <Grid container spacing={5} alignItems="flex-start" className={classes.root} >
      {isLoadingLists ?
          <Grid className={classes.todoList}>
           <div className="todo">Loading...</div>
          </Grid>
     :
    todoLists ?
     
      todoLists.map((todoList, index) => (
        <Grid className={classes.todoList} spacing={5} xs={12} md={6} lg={4}>
        <TodoList
    title={todoList.name}
    deleteTodoList={deleteTodoList}
    id={todoList._id}
    index={index}
    uri={uri}
    />
      </Grid>

      ))
    
    : null

    }

    <Grid className={classes.todoList} spacing={5} xs={12} md={6} lg={4}>
      <div className="todo-list">
    <TodoListForm
    createTodoList={createTodoList}

    />
    </div>
    </Grid>
    
    </Grid>

    

    </div>



  
    
    
    </>
  
  );
}

export default App;
