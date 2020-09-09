if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }  
const mongoose = require('mongoose')

const uri = process.env.MONGODB_URL


mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => {
        console.log("database connected")
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db