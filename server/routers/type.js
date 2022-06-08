const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/CheckRoleMiddleware')

//создать 
router.post('/type', checkRole('ADMIN'), typeController.create)

//отобразить все машины
router.get('/types', typeController.getAll)

//удалить по id
router.delete('/types/:id', checkRole('ADMIN'), typeController.delete)

module.exports = router