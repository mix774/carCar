export function isAdmin() {
	const res = localStorage.isAuthenticated === 'true' && localStorage.isAdmin === 'true'
	return res
}

export function isUser() {
	const res = localStorage.isAuthenticated === 'true' && localStorage.isAdmin === 'false'
	return res
}