const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/CheckRoleMiddleware')

//создать 
router.post('/brand', checkRole('ADMIN'), brandController.create)

//получить все бренды
router.get('/brands', brandController.getAll)

//удалить по id
router.delete('/brands/:id', checkRole('ADMIN'), brandController.delete)

module.exports = router