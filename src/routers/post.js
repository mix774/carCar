const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')

//создать машину
router.post('/post', postController.create)

//отобразить все машины
router.get('/posts', postController.getAll)

//найти определенную машину по id
router.get('/posts/:id', postController.getById)

//todo:  сделать!!!!!!!!!!!!!
//обновление
router.put('/posts', postController.update)

//todo create router to delete car by id
//удаление по id
router.delete('/posts/:id', postController.delete)

module.exports = router