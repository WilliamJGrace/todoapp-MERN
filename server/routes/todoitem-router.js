const express = require('express')


const TodoItemCtrl = require('../controllers/todoitem-ctrl')

const router = express.Router()

router.post('/todoitem', TodoItemCtrl.createTodoItem)
router.put('/todoitem/:id', TodoItemCtrl.updateTodoItem)


module.exports = router