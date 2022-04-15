const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const carRouter = require('./routers/car')

const app = express()
const port = 3000


app.use(express.json())
app.use(userRouter)
app.use(carRouter)

module.exports = app