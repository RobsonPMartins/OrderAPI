// app.js
const express = require('express')
const cors = require('cors')
const connectDB = require('../database/database')

const router = require('./routes/routes')

const app = express()

app.use(cors())
app.use(express.json())
connectDB()

app.use('/api', router)

router.get('/', (req, res) => {
    res.send('Get Acess!')
})

module.exports = app