const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const AuthMiddleware = require('../middleware/AuthMiddleware')
// TODO: 

//регистрация пользователя
router.post('/user/registration', userController.registration) 

//login
router.post('/user/login', userController.login)

//авторизация
router.get('/user/auth', AuthMiddleware, userController.check)

//получение всех пользователей 
router.get('/users', userController.getAll)

//обновление
router.put('/users', userController.update)

//удаление по id
router.delete('/users/:id', userController.delete)

//получение всех избранных
router.get('/user/favorites/:id', userController.getAllFavorites)

module.exports = router