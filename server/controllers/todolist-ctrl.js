const todolistModel = require("../models/todolist-model")
const TodoList = require("../models/todolist-model")

createTodoList = (req, res) => {

    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must prove a todo item'
        })
    }

    const todoList = new TodoList(body)

    todoList
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            id: todoList._id,
            message: 'Todolist created!'
        })

    }
    )




}

module.exports = {
    createTodoList
   

}