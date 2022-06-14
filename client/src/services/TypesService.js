export async function getAllTypes() {
	const response = await fetch('/types');
	return await response.json();
}