const Model = require('../models/model')
const ApiError = require('../error/ApiError')

class ModelController {
	async create(req, res, next) {
		try {
			const { name, brand, types } = req.body
			if (!name) {
				return next(ApiError.badRequest("Бренд не указан"))
			}
			const existingModel = await Model.findOne({ name: name })
			if (existingModel) {
				return next(ApiError.badRequest(`Модель ${name} уже существует`))
			}
			const model = await Model.create({ name, brand, types })
			res.status(201).json(model)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async getAll(req, res, next) {
		try {
			const brand = req.query.brand
			const models = await Model.find({brand: brand}).populate('types').exec()
			res.json(models)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async update(req, res, next) {
		try {
			const model = req.body
			if (!model._id) {
				return next(ApiError.badRequest("ID модели не указан"))
			}
			const updatedModel = await Model.findByIdAndUpdate(model._id, model, { new: true })
			if (!updatedModel) {
				return next(ApiError.notFound("Объявление не найдено"))
			}
			return res.status(201).send(updatedModel)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async delete(req, res, next) {
		try {
			const { id } = req.params
			if (!id) {
				return next(ApiError.badRequest("ID не указан"))
			}
			const deletedModel = await Model.findByIdAndDelete(id)
			if (!deletedModel) {
				return next(ApiError.notFound("Модель не найдена"))
			}
			res.json(deletedModel)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}
}

module.exports = new ModelController()