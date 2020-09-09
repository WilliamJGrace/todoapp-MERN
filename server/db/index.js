if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }  
const mongoose = require('mongoose')


mongoose
    .connect('mongodb+srv://' + process.env.MONGODB_USERNAME + ':' + process.env.MONGODB_PASSWORD + '@cluster0.obclx.mongodb.net/todoapp?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log("database connected")
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db