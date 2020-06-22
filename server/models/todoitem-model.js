
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoItem = new Schema(
    {
        name: { type: String, required: true },
        isCompleted: { type: Boolean, default: false}
    },
    { timestamps: true },
)

module.exports = mongoose.model('todoitems', TodoItem)