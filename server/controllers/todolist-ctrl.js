const TodoList = require("../models/todolist-model")
const TodoItem = require("../models/todoitem-model")

createTodoList = (req, res) => {

    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must prove a todo item'
        })
    }

    const todoList = new TodoList(body)

    if (!todoList) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

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
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'Todolist not created!'
        })
    })




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

deleteTodoItems = async (req, res) => {
    await TodoItem.deleteMany({todoListID: req.params.id}, (err, todoItems) => {
        if (err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if (!todoItems) {
            return res.status(404).json({
                success: false, error: 'Todoitems related to list not found'
            })
        }

        // return res.status(200).json({success: true, data: todoItems})

    }).catch(err => {console.log(err)})
}


deleteTodoList = async (req, res) => {
    await TodoList.findByIdAndDelete({_id: req.params.id}, (err, todoList) => {
        if (err){
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        console.log(todoList)
        if (!todoList) {
            return res.status(404).json({
                success: false, error: 'TodoList not found'
            })
        }

        // return res.status(200).json({success: true, data: todoList})


    }).catch(err => {console.log(err)})
    .then(() => deleteTodoItems(req, res)).then(() => res.status(200).json({success: true}))
   
}


module.exports = {
    createTodoList,
    getTodoLists,
    deleteTodoList
   

}