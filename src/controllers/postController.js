const uuid = require('uuid')
const path = require('path');
const Post = require('../models/post')


class PostController {
	async create(req, res) {
		try {
			const { brand, model, year, amountOfOwners, description, price } = req.body
			/*
			const { picture } = req.files
			let fileName = uuid.v4() + ".jpg"
			img.mv(path.resolve(__dirname, '..', 'static', fileName))*/
			//const car = await Car.create({ brand, model, year, amountOfOwners, description, price, picture: fileName})
			const post = await Post.create({ brand, model, year, amountOfOwners, description, price })
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
}

module.exports = new PostController()