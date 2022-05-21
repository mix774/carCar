const Brand = require('../models/brand')

class BrandController {
	async create(req, res) {
		try {
			const { name } = req.body
			if (!name) {
				return res.status(400).json({message: "Введите бренд"})
			}
			const existingBrand = await Brand.findOne({ name: name })
			if (existingBrand) {
				return res.status(400).json({ message: "Такой бренд уже существует" })
			}
			const brand = await Brand.create({ name })
			res.status(201).json(brand)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async getAll(req, res) {
		try {
			const brands = await Brand.find()
			res.status(200).json(brands)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params
			if (!id || id.trim() === "") {
				return res.status(400).json({ message: "ID не указан" })
			}

			const deletedBrand = await Brand.findByIdAndDelete(id)
			if (!deletedBrand) {
				return res.status(404).json({ message: "Бренд не найден" })
			}
			res.status(200).json(deletedBrand)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}
}

module.exports = new BrandController()