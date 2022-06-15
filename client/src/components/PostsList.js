import React from 'react';
import Grid from '@mui/material/Grid';
import PostCard from './PostCard'



function PostsList({ posts }) {

	return (
		<Grid container spacing={4}>
			{posts.map((post) => (
				<PostCard post={post} key={post._id} />
			))}
		</Grid>
	);
};

export default PostsList;