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

getTodoLists = async (req, res) => {
    await TodoList.find({}, (err, todoLists) => {
        if (err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if (!todoLists.length) {
            return res.status(404).json({
                success: false, error: 'TodoLists not found'
            })
        }
        return res.status(200).json({ success: true, data: todoLists })

    }).catch(err => {console.log(err)})
}

module.exports = {
    createTodoList,
    getTodoLists
   

}