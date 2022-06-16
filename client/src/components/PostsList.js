import React from 'react';
import Grid from '@mui/material/Grid';
import PostCard from './PostCard'



function PostsList({ posts, favorites, reloadFavorites}) {
	const isFavorite = (postId) => {
		const res = favorites.includes(postId)
		return res
	}
	
	return (
		<Grid container spacing={4}>
			{posts.map((post) => (
				<PostCard reloadFavorites={reloadFavorites} post={post} key={post._id} isFavorite={isFavorite(post._id)}/>
			))}
		</Grid>
	);
};

export default PostsList;