const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	},
	favorites: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'Post'
	}]
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User
