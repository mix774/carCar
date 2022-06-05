require('dotenv').config()
const express = require('express')
require('../server/db/mongoose')
const userRouter = require('./routers/user')
const postRouter = require('./routers/post')
const brandRouter = require('./routers/brand')
const typeRouter = require('./routers/type')
const modelController = require('./routers/model')
const fileUpload = require('express-fileupload');
const ErrorHandler = require('./middleware/ErrorHandling')

const app = express()
const port = 3000

app.use(fileUpload({
	limits: { fileSize: 50 * 1024 * 1024 },
}))
app.use(express.json())
app.use(userRouter)
app.use(postRouter)
app.use(brandRouter)
app.use(typeRouter)
app.use(modelController)

//должен быть последним
app.use(ErrorHandler)


module.exports = app