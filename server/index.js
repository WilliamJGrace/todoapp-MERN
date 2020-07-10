
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const todoItemRouter = require('./routes/todoitem-router')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', todoItemRouter)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))