const express = require('express')
require('../src/db/mongoose')
const fileUpload = require('express-fileupload')
const userRouter = require('./routers/user')
const postRouter = require('./routers/post')
const brandRouter = require('./routers/brand')
const typeRouter = require('./routers/type')
const modelController = require('./routers/model')

const app = express()
const port = 3000


app.use(express.json())
app.use(userRouter)
app.use(postRouter)
app.use(brandRouter)
app.use(typeRouter)
app.use(modelController)

module.exports = app