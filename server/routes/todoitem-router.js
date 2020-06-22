const express = require('express')


const TodoItemCtrl = require('../controllers/todoitem-ctrl')

const router = express.Router()

router.post('/todoitem', TodoItemCtrl.createTodoItem)

module.exports = router