export function isAdmin() {
	const res = localStorage.isAuthenticated && localStorage.isAdmin
	return res
}