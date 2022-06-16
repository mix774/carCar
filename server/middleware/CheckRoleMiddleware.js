const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

module.exports = function (role) {
	return function (req, res, next) {
		if (req.method=== "OPTIONS") {
			next()
		}
		try {
			console.log(req.headers.authorization);
			const token = req.headers.authorization.split(' ')[1]
			if(!token) {
				return next(ApiError.unauthorized("Пользователь не авторизован"))
			}
			const decoded = jwt.verify(token, process.env.SECRET_KEY)
			if (decoded.role !== role) {
				return next(ApiError.forbidden("Нет доступа"))
			}
			console.log(decoded);
			req.user = decoded
			next()
		} catch (err) {
			next(ApiError.unauthorized("Пользователь не авторизован"))
		}
	};
}