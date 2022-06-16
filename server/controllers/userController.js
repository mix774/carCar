const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

const generateJwt = (id, email, role) => {
	return jwt.sign(
		{ id, email, role },
		process.env.SECRET_KEY,
		{ expiresIn: '24h' }
	)
}

class UserController {
	async registration(req, res, next) {
		try {
			const { firstName, secondName, email, phoneNumber, password, role, favorites } = req.body
			console.log(email);
			console.log(password);
			if (!email || !password) {
				return next(ApiError.badRequest("Логин и пароль обязательны для заполнения"))
			}
			const candidate = await User.findOne({ email: email })
			if (candidate) {
				return next(ApiError.badRequest("Пользователь с таким логином уже зарегистрирован"))
			}
			const hashPassword = await bcrypt.hash(password, 5)
			const user = await User.create({ firstName, secondName, email, phoneNumber, password: hashPassword, role, favorites })
			const token = generateJwt(user._id, user.email, user.role)
			return res.json({ token, role: user.role, favorites: user.favorites})
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async login(req, res, next) {
		try {
			const { email, password } = req.body
			const user = await User.findOne({ email: email })
			if (!user) {
				return next(ApiError.notFound("Пользователь не найден"))
			}
			let comparePassword = bcrypt.compareSync(password, user.password)
			if (!comparePassword) {
				return next(ApiError.badRequest("Невозможно войти в систему"))
			}
			const token = generateJwt(user._id, user.email, user.role)
			return res.json({ token, role: user.role, favorites: user.favorites})
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async check(req, res, next) {
		try {
			const token = generateJwt(req.user._id, req.user.email, req.user.role)
			res.json({ token })
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async getAll(req, res, next) {
		try {
			const users = await User.find()
			res.status(200).json(users)
		} catch (err) {
			next(ApiError.internal(err.message))
		}

	}

	async update(req, res, next) {
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
			next(ApiError.internal(err.message))
		}
	}

	async delete(req, res, next) {
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
			next(ApiError.internal(err.message))
		}
	}

	async getAllFavorites(req, res, next) {
		try {
			const id = req.user.id
			if (!(await User.findById(id))) {
				return res.status(404).json({ message: "Такого пользователя не существует" })
			}
			const favoritesList = await User.findById(id, { favorites: 1, _id: 0 }).populate('favorites')
			.populate({path: 'favorites', populate: {path: 'model', populate: {path: 'brand'}}})
			.populate({path: 'favorites', populate: {path: 'type'}})
			
			res.status(200).json(favoritesList)
		} catch (err) {
			console.log(err)
			next(ApiError.internal(err.message))
		}
	}

	async getAllFavoritesIds(req, res, next) {
		try {
			const id = req.user.id
			if (!(await User.findById(id))) {
				return res.status(404).json({ message: "Такого пользователя не существует" })
			}
			const favoritesList = await User.findById(id, { favorites: 1, _id: 0 })
			res.status(200).json(favoritesList)
		} catch (err) {
			console.log(err)
			next(ApiError.internal(err.message))
		}
	}

	async addFavorites(req, res, next) {
		try {
			const { postId } = req.params
			const updatedUser = await User.updateOne(
				{ _id: req.user.id },
				{ $push: { favorites: postId } }
			);
			const user = await User.findById(req.user.id)
			res.status(201).json(user.favorites)
		} catch (err) {
			console.log(err)
			next(ApiError.internal(err.message))
		}
	}

	async removeFavorites(req, res, next) {
		try {
			const { postId } = req.params
			const updatedUser = await User.updateOne(
				{ _id: req.user.id },
				{ $pull: { favorites: postId } }
			);
			const user = await User.findById(req.user.id)
			res.status(201).json(user.favorites)
		} catch (err) {
			console.log(err)
			next(ApiError.internal(err.message))
		}
	}
}

module.exports = new UserController()