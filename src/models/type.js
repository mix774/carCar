const mongoose = require('mongoose')
const { string } = require('sharp/lib/is')
const typeSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	}
}, { timestamps: true })

const Type = mongoose.model('Type', typeSchema)

module.exports = Type