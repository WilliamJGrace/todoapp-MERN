const { model } = require("../db");

const TodoItem = require('../models/todoitem-model');
const todoitemModel = require("../models/todoitem-model");


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

updateTodoItem = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update'
        })
    }

    TodoItem.findOne({ _id: req.params.id }, (err, todoItem) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'TodoItem Not Found!'
            })
        }
        todoItem.name = body.name
        todoItem.isCompleted = body.isCompleted
        todoItem
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: todoitem._id,
                    message: 'Todoitem updated!'
                })
            })
    } )
}


module.exports = {
    createTodoItem
}