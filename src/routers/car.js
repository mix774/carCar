const express = require('express')
const router = express.Router()
const testCars = [
    {
        id: 'model1',
        model: 'Car model 1',
        year: '2019',
        amountOfOwners: '1',
        descirption: 'Here is the test description for this car'
    },
    {
        id: 'model2',
        model: 'Car model 2',
        year: '2020',
        amountOfOwners: '2',
        descirption: 'Here is the test description for this car 2'
    }
 ]

//  отобразить все машины или с фильтром по году
router.get('/cars', async (request, respose) => {
    // query - для передачи параметров через ?
    console.log(request.query.year)
    if (request.query.year) {
        respose.status(200).send(testCars.filter(car => car.year === request.query.year))
    } else {
        respose.status(200).send(testCars)
    }
})

// найти определенную машину по id
router.get('/cars/:id', async (req, res) => {
    // req.params для переда параметра через /
    res.status(200).send(testCars.filter(car =>  car.id === req.params.id))
})

// обновление полей amountOfOwners и name 
router.post('/cars/model1', async(req, res) => {
    console.log(req.query)
    
    const model1 =     {
        model: 'Car model 1',
        year: '2019',
        amountOfOwners: req.query.amountOfOwners,
        name: req.query.name,
        descirption: 'Here is the test description for this car'
    };

    res.status(200).send(model1);
})

module.exports = router