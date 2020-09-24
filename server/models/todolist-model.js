const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoList = new Schema(
    {
        name: { type: String, required: true },
    
    },
    { timestamps: true },
)

module.exports = mongoose.model('todolists', TodoList)