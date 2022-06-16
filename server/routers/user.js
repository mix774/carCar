const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const AuthMiddleware = require('../middleware/AuthMiddleware')
const checkRole = require('../middleware/CheckRoleMiddleware')
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
router.get('/user/favorites', checkRole('USER'), userController.getAllFavorites)

router.get('/user/favoritesIds', checkRole('USER'), userController.getAllFavoritesIds)

router.put('/user/addFav/:postId', checkRole('USER'), userController.addFavorites)

router.delete('/user/removeFav/:postId', checkRole('USER'), userController.removeFavorites)

module.exports = router