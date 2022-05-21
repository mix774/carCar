const uuid = require('uuid')
const path = require('path');
const Post = require('../models/post');
const { json } = require('express/lib/response');


class PostController {
	async create(req, res) {
		try {
			const { brand, model, year, amountOfOwners, description, price, picture, mileage, views, activate } = req.body
			/*
			const { picture } = req.files
			let fileName = uuid.v4() + ".jpg"
			img.mv(path.resolve(__dirname, '..', 'static', fileName))*/
			//const car = await Car.create({ brand, model, year, amountOfOwners, description, price, picture: fileName})
			const post = await Post.create({ brand, model, year, amountOfOwners, description, price, mileage, picture, views, activate })
			res.status(201).json(post)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async getAll(req, res) {
		try {
			const posts = await Post.find()
			res.status(200).json(posts)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async getById(req, res) {
		try {
			const { id } = req.params
			if (!id) {
				return res.status(400).json({ message: "ID объявления не указан" })

			}
			const post = await Post.findById(id)
			res.status(200).json(post)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async update(req, res) {
		try {
			const post = req.body
			if (!post._id) {
				return res.status(400).json({ message: "ID объявления не указан" })
			}
			const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
			if (!updatedPost) {
				return res.status(404).json({ message: "Объявление не существует" })
			}
			res.status(200).send(updatedPost)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params
			if (!id) {
				return res.status(400).json({ message: "ID объявления не указан" })
			}
			const deletedPost = await Post.findByIdAndDelete(id)
			if (!deletedPost) {
				return res.status(404).json({ message: "Объявление уже удалено" })
			}
			res.status(200).json(deletedPost)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async activate(req, res) {
		try {
			const { id } = req.params
			const condition = await Post.findById(id)
			if (!condition) {
				return res.status(404).json({ message: "Такого объявления не существует" })
			}
			if (condition.active === true) {
				return res.status(400).json({ message: "Объявление уже активировано" })
			}
			console.log("tabta")
			const activatedPost = await Post.findByIdAndUpdate(id, { $set: { active: true } }, { new: true })
			res.status(201).json(activatedPost)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async deactivate(req, res) {
		try {
			const { id } = req.params
			const condition = await Post.findById(id)
			if (!condition) {
				return res.status(404).json({ message: "Такого объявления не существует" })
			}
			if (condition.active === false) {
				return res.status(400).json({ message: "Объявление уже деактивировано" })
			}
			const deactivatedPost = await Post.findByIdAndUpdate(id, { $set: { active: false } }, { new: true })
			res.status(201).json(deactivatedPost)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}

	async incrementViews(req, res) {
		try {
			const { id } = req.params
			if (!(await Post.findById(id))) {
				return res.status(404).json({ message: "Такого объявления не существует" })
			}
			const updatedViews = await Post.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true })
			res.status(201).json(updatedViews)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}
}

module.exports = new PostController()