const express = require('express')


const TodoItemCtrl = require('../controllers/todoitem-ctrl')

const router = express.Router()

router.post('/todoitem', TodoItemCtrl.createTodoItem)
router.put('/todoitem/:id', TodoItemCtrl.updateTodoItem)
router.get('/todoitems', TodoItemCtrl.getTodoItems)
router.delete('/todoitem/:id', TodoItemCtrl.deleteTodoItem)
router.get('/todoitem/:id', TodoItemCtrl.getTodoItemById)


module.exports = router