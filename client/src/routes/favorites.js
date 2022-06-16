import React, { useEffect, useState } from "react";
import axios from 'axios';
import Grid from '@mui/material/Grid';
import PostCard from '../components/PostCard';
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

export default function Favorites() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		loadFavorites()
	}, [])

	const loadFavorites = () => {
		axios.get('/user/favorites', {
			headers: {
				'Authorization': `Bearer ${localStorage.token}`
			}
		}).then(res => {
			if (res.status === 200) {
				console.log(res.data);
				setPosts(res.data.favorites)
			} else {
				console.log('Unable to fetch models')
			}
		})
	}

	return (
		<Container>
			<Typography variant="h5" style={{ textAlign: "center", marginTop: "5px"}}>
				Избранные
			</Typography>
			<Grid container spacing={4} marginTop="15px">
				{posts.map((post) => (
					<PostCard reloadFavorites={loadFavorites} isFavorite={true} post={post} key={post._id} />
				))}
			</Grid>
		</Container>
	);
}