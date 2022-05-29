const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	secondName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true
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
