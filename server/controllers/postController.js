const uuid = require('uuid')
const path = require('path');
const Post = require('../models/post');
const { json } = require('express/lib/response');
const Image = require('../models/image');
const ApiError = require('../error/ApiError')

class PostController {
	async create(req, res, next) {
		try {
			const { model, type, year, amountOfOwners, description, price, mileage, views, active } = req.body
			const post = await Post.create({ model, type, year, amountOfOwners, description, price, mileage, views, active })
			return res.status(201).json(post)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async getAll(req, res, next) {
		try {
			const posts = await Post.find().populate('model').populate('type')
			return res.json(posts)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async getById(req, res, next) {
		try {
			const { id } = req.params
			if (!id) {
				return next(ApiError.badRequest("ID объявления не указан"))
			}
			const post = await Post.findById(id).populate('model').populate('type')
			if (!post) {
				return next(ApiError.badRequest("Объявления не существует"))
			}
			return res.json(post)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async update(req, res, next) {
		try {
			const post = req.body
			if (!post._id) {
				return next(ApiError.badRequest("ID объявления не указан"))
			}
			const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
			if (!updatedPost) {
				return next(ApiError.notFound("Объявление не найдено"))
			}
			return res.status(201).send(updatedPost)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async delete(req, res, next) {
		try {
			const { id } = req.params
			if (!id) {
				return next(ApiError.badRequest("ID объявления не указан"))
			}
			const deletedPost = await Post.findByIdAndDelete(id)
			if (!deletedPost) {
				return next(ApiError.notFound("Объявление не найдено"))
			}
			return res.json(deletedPost)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async activate(req, res, next) {
		try {
			const { id } = req.params
			const condition = await Post.findById(id)
			if (!condition) {
				return next(ApiError.notFound("Объявление не найдено"))
			}
			if (condition.active === true) {
				return next(ApiError.badRequest("Объявление уже активировано"))
			}
			const activatedPost = await Post.findByIdAndUpdate(id, { $set: { active: true } }, { new: true })
			return res.status(201).json(activatedPost)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async deactivate(req, res, next) {
		try {
			const { id } = req.params
			const condition = await Post.findById(id)
			if (!condition) {
				return next(ApiError.notFound("Объявление не найдено"))
			}
			if (condition.active === false) {
				return next(ApiError.badRequest("Объявление уже деактивировано"))
			}
			const deactivatedPost = await Post.findByIdAndUpdate(id, { $set: { active: false } }, { new: true })
			return res.status(201).json(deactivatedPost)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async incrementViews(req, res, next) {
		try {
			const { id } = req.params
			const condition = await Post.findById(id)
			if (!condition) {
				return next(ApiError.notFound("Объявление не найдено"))
			}
			const updatedViews = await Post.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true })
			return res.status(201).json(updatedViews)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async uploadImages(req, res, next) {
		try {
			const savedImage = await Image.create({ image: { data: Buffer.from(req.files.image.data, 'base64'), contentType: req.files.image.mimetype } });
			const { id } = req.params
			console.log(`Post ID: ${id}`)
			const updatedPost = await Post.updateOne(
				{ _id: id },
				{ $push: { images: savedImage._id } }
			);
			return res.send(updatedPost)
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}

	async getImage(req, res, next) {
		try {
			const { id: _id } = req.params;
			const image = await Image.findOne({ _id });
			var img = Buffer.from(image.image.data, 'base64');
			res.writeHead(200, {
				'Content-Type': image.image.contentType,
				'Content-Length': img.length
			});
			return res.end(img);
		} catch (err) {
			next(ApiError.internal(err.message))
		}
	}
}

module.exports = new PostController()