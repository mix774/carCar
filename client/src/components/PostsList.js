import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PostCard from './PostCard2'
import {getAllPosts} from '../services/PostService.js'


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
              <PostCard post={post} key={post._id}/>
            ))}
          </Grid>
	);
};

export default PostsList;