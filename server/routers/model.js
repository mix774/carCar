const Router = require('express')
const router = new Router()
const modelController = require('../controllers/modelController')
const checkRole = require('../middleware/CheckRoleMiddleware')

//создать 
router.post('/model', checkRole('ADMIN'), modelController.create)

//отобразить все машины
router.get('/models', modelController.getAll)

//обновить
router.put('/model', checkRole('ADMIN'), modelController.update)

//удалить по id
router.delete('/models/:id', checkRole('ADMIN'), modelController.delete)

module.exports = router