const mongoose = require('mongoose')
const { string } = require('sharp/lib/is')
const brandSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	}
}, { timestamps: true })

const Brand = mongoose.model('Brand', brandSchema)

module.exports = Brand