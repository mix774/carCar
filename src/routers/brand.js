const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')

//создать 
router.post('/brand', brandController.create)

//отобразить все машины
router.get('/brands', brandController.getAll)

//удалить по id
router.delete('/brands/:id', brandController.delete)

module.exports = router