const mongoose = require('mongoose')
const { string } = require('sharp/lib/is')
const postSchema = new mongoose.Schema({
	brand: {
		type: String,
		require: true
	},
	model: {
		type: String,
		require: true
	},
	year: {
		type: Number,
		required: true
	},
	amountOfOwners: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true,
		trim: true
	},
	price: {
		type: Number,
		required: true
	},
	picture: {
		type: string,
//		required: true
	}
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

module.exports = Post