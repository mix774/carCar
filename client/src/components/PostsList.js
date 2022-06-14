import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import PostCard from './PostCard'
import { getAllPosts } from '../services/PostService.js'


function PostsList() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		getAllPosts().then(fetchedPosts => {
			console.log(fetchedPosts)
			setPosts(fetchedPosts)
		})
	}, [])
	return (
		<Grid container spacing={4}>
			{posts.map((post) => (
				<PostCard post={post} key={post._id} />
			))}
		</Grid>
	);
};

export default PostsList;