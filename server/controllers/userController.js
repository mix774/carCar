const { findById } = require('../models/user')
const User = require('../models/user')

class UserController {
	async registration(req, res) {
		const { name, email, password, role } = req.body

		// Проверяем наличие входящих данных
		if (!email || !password) {
			return res.status(400).json({ message: 'Логин и пароль обязательны для заполнения' })
		}

		try {
			// Проверяем, есть ли в бд пользователь с таким логином
			const candidate = await User.findOne({ email: email })

			// Если пользователь найден возвращаем ошибку, иначе создаем его
			if (candidate) {
				return res.status(409).json({ message: 'Пользователь с таким логином уже зарегистрирован' })
			} else {
				const user = await User.create({ name, email, password, role, favorites})
				return res.status(201).json({ message: 'Пользователь создан' })
			}
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async login(req, res) {
		const { email, password } = req.body
		const user = await User.findOne({ email: email })
		if (!user) {
			return res.status(404).json({ message: 'Пользователь не найден' })
		}
	}

	async getAll(req, res) {
		try {
			const users = await User.find()
			res.status(200).json(users)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}

	}

	async update(req, res) {
		try {
			const user = req.body
			if (!user._id) {
				return res.status(400).json({ message: "ID не указан" })
			}
			const updatedUser = await User.findByIdAndUpdate(user._id, user, { new: true })
			if (!updatedUser) {
				return res.status(404).json({ message: "Пользователя не существует" })
			}
			res.status(200).json(updatedUser)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params
			if (!id) {
				return res.status(400).json({ message: "ID не указан" })
			}
			const deletedUser = await User.findByIdAndDelete(id)
			if (!deletedUser) {
				return res.status(404).json({ message: "Пользователь не найден" })
			}
			res.status(200).json(deletedUser)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async getAllFavorites(req, res) {
		try {
			const { id } = req.params
			if (!(await User.findById(id))) {
				return res.status(404).json({ message: "Такого пользователя не существует" })
			}
			const favoritesList = await User.findById(id, {favorites: 1, _id:0}).populate('favorites')
			res.status(200).json(favoritesList)
		} catch (err) {
			console.log(err)
			res.status(500).json({ message: err.message })
		}
	}
}

module.exports = new UserController()