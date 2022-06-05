const Type = require('../models/type')
const ApiError = require('../error/ApiError')

class TypeController {
	async create(req, res, next) {
		try {
			const { name } = req.body
			if (!name) {
				return next(ApiError.badRequest("Введите тип кузова"))
			}
			const existingType = await Type.findOne({ name: name })
			if (existingType) {
				return next(ApiError.badRequest(`Тип кузова ${name} уже существует`))
			}
			const type = await Type.create({ name })
			res.status(201).json(type)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async getAll(req, res, next) {
		try {
			const types = await Type.find()
			res.json(types)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async delete(req, res, next) {
		try {
			const { id } = req.params
			if (!id || id.trim() === "") {
				return next(ApiError.badRequest("ID не указан"))
			}
			const deletedType = await Type.findByIdAndDelete(id)
			if (!deletedType) {
				return next(ApiError.notFound("Тип кузова не найден"))
			}
			res.json(deletedType)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}
}

module.exports = new TypeController()