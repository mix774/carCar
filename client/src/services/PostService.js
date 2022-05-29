export async function getAllPosts() {
	const response = await fetch('/posts');
	return await response.json();
}