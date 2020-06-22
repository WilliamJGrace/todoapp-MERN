const { model } = require("../db");

const TodoItem = require(../models/todoitem-model)


createTodoItem = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must prove a todo item'
        })
    }

    const todoItem = new TodoItem(body)

    if (!todoItem) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    todoItem
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: todoItem._id,
                message: 'Todoitem created!'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Todoitem not created!'
            })
        })
        
        
        

}


module.exports = {
    createTodoItem
}