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
router.put('/post', checkRole('ADMIN'), postController.update)

//todo create router to delete car by id
//удаление объявления по id
router.delete('/posts/:id', checkRole('ADMIN'), postController.delete)

//активировать объявление
router.put('/activatepost/:id', checkRole('ADMIN'), postController.activate)

//деактивировать объявление
router.put('/deactivatepost/:id', checkRole('ADMIN'), postController.deactivate)

//инкремент просмотров
router.put('/addpostviews/:id', postController.incrementViews)

//загрузка картинки в объявление
router.post('/post/:id/uploadImages', checkRole('ADMIN'), postController.uploadImages)

router.get('/image/:id', postController.getImage)

module.exports = router