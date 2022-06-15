import axios from 'axios';

export async function getAllPosts() {
	const response = await axios.get('/allposts', {
		headers: {
			'Authorization': `Bearer ${localStorage.token}`
		}
	});
	return await response;
}

export async function getAllActivePosts() {
	const response = await axios.get('/posts');
	return await response;
}

export function activatePost(postId) {
	console.log(postId)
	return axios.put(`/activatepost/${postId}`, {}, {
		headers: {
			'Authorization': `Bearer ${localStorage.token}`
		}
	})
}


export function deactivatePost(postId) {
	console.log(postId)
	return axios.put(`/deactivatepost/${postId}`, {}, {
		headers: {
			'Authorization': `Bearer ${localStorage.token}`
		}
	})
}