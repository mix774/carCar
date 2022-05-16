const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')

//создать 
router.post('/type', typeController.create)

//отобразить все машины
router.get('/types', typeController.getAll)

//удалить по id
router.delete('/types/:id', typeController.delete)

module.exports = router