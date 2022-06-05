const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')
const checkRole = require('../middleware/CheckRoleMiddleware')

//создать объявление
router.post('/post', checkRole('ADMIN'), postController.create)

//отобразить все объявления
router.get('/posts', postController.getAll)

//найти определенное объявление по id
router.get('/posts/:id', postController.getById)

//todo:  сделать!!!!!!!!!!!!!
//обновление объявления
router.put('/post', postController.update)

//todo create router to delete car by id
//удаление объявления по id
router.delete('/posts/:id', postController.delete)

//активировать объявление
router.put('/activatepost/:id', postController.activate)

//деактивировать объявление
router.put('/deactivatepost/:id', postController.deactivate)

//инкремент просмотров
router.put('/addpostviews/:id', postController.incrementViews)

//загрузка картинки в объявление
router.post('/post/:id/uploadImages', postController.uploadImages)

router.get('/image/:id', postController.getImage)

module.exports = router