const express = require('express')
const router = express.Router()

// TODO: 

// create array of 5 users 
const arrayOfUsers = [
	{
		id: 0,
		name: 'Tabat',
		age: 25,
		sex: 'male'
	},
	{
		id: 1,
		name: 'Tabata',
		age: 22,
		sex: 'female'
	},
	{
		id: 2,
		name: 'Batat',
		age: 38,
		sex: 'male'
	},
	{
		id: 3,
		name: 'Batata',
		age: 35,
		sex: 'female'
	}
]

// GET endpoint to get all users + add one or two filters 

router.get('/users', async (request, response) => {
	let arr = []
	console.log(request.query)
	const age = request.query.age
	const sex = request.query.sex
	console.log(sex)
	console.log(age)


	if (age && sex) {
		arr = arrayOfUsers.filter(user => (user.age == age) && (user.sex == sex))
		console.log(arr)
	} else if (age) {
		arr = arrayOfUsers.filter(user => user.age == age)
	} else if (sex) {
		arr = arrayOfUsers.filter(user => user.sex == sex)
	} else {
		arr = arrayOfUsers
	}

	response.status(200).send(arr)
})


/*router.get('/users', async (request, response) => {
	function print(age, sex) {
		if (age) console.log(age)
		if (sex) console.log(sex)
	}
	print(request.query.age, request.query.sex)

	if (request.query.age) {
		response.status(200).send(arrayOfUsers.filter(user => user.age === request.query.age))
	} else if (request.query.sex) {
		response.status(200).send(arrayOfUsers.filter(user => user.sex === request.query.sex))
	} else {
		response.status(200).send(arrayOfUsers)
	}

})*/


// GET endpoint to get the user by 'username'

router.get('/users/:name', async (request, response) => {
	console.log(request.params.name)
	response.status(200).send(arrayOfUsers.filter(user => user.name === request.params.name))
})


// POST endpoint to update user age

/*router.post('users/:change', async(request, response) => {
	let arr1 = arrayOfUsers.filter(user => user.id = request.params.id)
	if (arr1){
		res = arr1.map(element => element.age = request.params.id)
		response.status(200).send(res)
	} else response.status(200).send(arrayOfUsers)
})*/

module.exports = router