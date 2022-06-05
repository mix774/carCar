const Brand = require('../models/brand')
const ApiError = require('../error/ApiError')


class BrandController {
	async create(req, res, next) {
		try {
			const { name } = req.body
			if (!name) {
				return next(ApiError.badRequest("Бренд не указан"))
			}
			const existingBrand = await Brand.findOne({ name: name })
			if (existingBrand) {
				return next(ApiError.badRequest(`Бренд с именем ${name} уже существует`))
			}
			const brand = await Brand.create({ name })
			res.status(201).json(brand)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async getAll(req, res, next) {
		try {
			const brands = await Brand.find()
			res.json(brands)
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
			const deletedBrand = await Brand.findByIdAndDelete(id)
			if (!deletedBrand) {
				return next(ApiError.notFound("Бренд не найден"))
			}
			res.json(deletedBrand)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}
}

module.exports = new BrandController()