const express = require('express')


const TodoItemCtrl = require('../controllers/todoitem-ctrl')

const router = express.Router()

router.post('/todoitem', MovieCtrl.createTodoItem)

module.exports = router