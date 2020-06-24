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
                    id: todoItem._id,
                    message: 'Todoitem updated!'
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'todoitem not updated!',
                })
            })
    } )
}

getTodoItemById = async (req, res) => {
    await TodoItem.findOne({ _id: req.params.id }, (err, todoItem) => {
        if (err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if (!todoItem) {
            return res.status(404).json({
                success: false, error: 'Todoitem not found'
            })
        }
        return res.status(200).json({ success: true, data: todoItem })
    }).catch(err => console.log(err))
}

deleteTodoItem = async (req, res) => {
    await TodoItem.findOneAndDelete({_id: req.params.id }, (err, todoItem) => {
        if (err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if (!todoItem) {
            return res.status(404).json({
                success: false, error: 'Todoitem not found'
            })
        }
        return res.status(200).json({ success: true, data: todoItem })



    }).catch(err => {console.log(err)})
}

getTodoItems = async (req, res) => {
    await TodoItem.find({}, (err, todoItems) => {
        if (err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if (!todoItems.length) {
            return res.status(404).json({
                success: false, error: 'Todoitems not found'
            })
        }
        return res.status(200).json({ success: true, data: todoItems })

    }).catch(err => {console.log(err)})
}

module.exports = {
    createTodoItem,
    updateTodoItem,
    getTodoItemById,
    deleteTodoItem,
    getTodoItems

}