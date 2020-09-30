import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'


function TodoList({uri, title, id, deleteTodoList, index}) {

    const [todoItems, setTodoItems] = useState(null)
    const [isLoading] = useState(false)

    const fetchTodoItems = () => {
        fetch(uri + "/api/todoitems")
        .then(res => {
          return (res.json())
        })
        .then(data =>{
          // filtering out other todoitems
          const todoItemsWithListID = data.data.filter(todoItem => todoItem.todoListID === id)
          
          setTodoItems(todoItemsWithListID)
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
          body: JSON.stringify({ name: value, todoListID: id })
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


      return(
        <div className="todo-list">
          <div className="todo-title">
            {title}
            <button id='deletelist' onClick={() => deleteTodoList(index)}>Delete</button>

          </div>

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
      )






}

export default TodoList