const Router = require('express')
const router = new Router()
const modelController = require('../controllers/modelController')

//создать 
router.post('/model', modelController.create)

//отобразить все машины
router.get('/models', modelController.getAll)

//удалить по id
router.delete('/models/:id', modelController.delete)

module.exports = router