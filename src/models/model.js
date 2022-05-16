const mongoose = require('mongoose')
const { string } = require('sharp/lib/is')

const modelSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	brand: {
		type: mongoose.Schema.Types.ObjectId, ref: 'Brand'
	},
	types: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'Type'
	}]
}, { timestamps: true })

const Model = mongoose.model('Model', modelSchema)

module.exports = Model