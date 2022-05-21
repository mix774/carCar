const Type = require('../models/type')

class TypeController {
	async create(req, res) {
		try {
			const { name } = req.body
			if (!name) {
				return res.status(400).json({message: "Введите тип кузова"})
			}
			const existingType = await Type.findOne({ name: name })
			if (existingType) {
				return res.status(400).json({ message: "Такой тип кузова уже существует" })
			}
			const type = await Type.create({ name })
			res.status(201).json(type)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async getAll(req, res) {
		try {
			const types = await Type.find()
			res.status(200).json(types)
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
			const deletedType = await Type.findByIdAndDelete(id)
			if (!deletedType) {
				return res.status(404).json({ message: "Тип кузова не найден" })
			}
			res.status(200).json(deletedType)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}
}

module.exports = new TypeController()