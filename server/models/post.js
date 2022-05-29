const mongoose = require('mongoose')
const { string, bool } = require('sharp/lib/is')
const postSchema = new mongoose.Schema({
	model: {
		type: mongoose.Schema.Types.ObjectId, ref: 'Model'
	},
	type: {
		type: mongoose.Schema.Types.ObjectId, ref: 'Type'
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
		type: String,
//		required: true
	},
	mileage: {
		type: Number,
	},
	views: {
		type: Number,
		default: 0
	},
	active: {
		type: Boolean,
		required: true,
		default: true
	}
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

module.exports = Post