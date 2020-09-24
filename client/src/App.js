import React from 'react';
import { Helmet } from 'react-helmet'
import TodoList from './hooks/TodoList'

import './App.css';



function App() {
  // const [todoItems, setTodoItems] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)

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

    <TodoList
    uri={uri}
    />
    
    </>
  
  );
}

export default App;
