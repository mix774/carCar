const Model = require('../models/model')

class ModelController {
	async create(req, res) {
		try {
			const {name, brand, types} = req.body
			const model = await Model.create({name, brand, types})
			res.status(201).json(model)
			//сделать  проверку на 
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async getAll(req, res) {
		try {
			const models = await Model.find()
			res.status(200).json(models)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params
			if (!id) {
				res.status(400).send("ID не указан")
			}
			const deletedModel = await Model.findByIdAndDelete(id)
			if (!deletedModel) {
				return res.status(404).json({message: "Модель не найдена"})
			}
			res.status(200).send(deletedModel)
		} catch (err) {
			res.send(500).send(err.message)
		}
	}
}

module.exports = new ModelController()