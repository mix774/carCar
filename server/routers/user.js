const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

// TODO: 

//создание пользователя
router.post('/user', userController.registration) 

//получение всех пользователей 
router.get('/users', userController.getAll)

//обновление
router.put('/users', userController.update)

//удаление по id
router.delete('/users/:id', userController.delete)

//получение всех избранных
router.get('/userfavorites/:id', userController.getAllFavorites)

module.exports = router