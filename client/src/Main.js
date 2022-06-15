import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PostsList from './components/PostsList';
import TypeBar from './components/TypeBar';
import classes from './css/Main.module.css'
import { getAllActivePosts } from './services/PostService.js'


function Main() {

	const [posts, setPosts] = useState([])
	const [typeFilter, setTypeFilter] = useState('')

	useEffect(() => {
		getAllActivePosts().then(res => {
			console.log(res.data)
			setPosts(res.data)
		})
	}, [])

	const handleTypeFilter = (type) => {
		if (type) {
			setTypeFilter(type)
		}
	}

	const filteredPosts = typeFilter ? posts.filter(p => p.type._id === typeFilter) : posts;

	return (
		<Container fixed >
			<div className={classes.startPage}>
				<p>Выберите машину своей мечты</p>
			</div>
			<TypeBar handleTypeFilter={handleTypeFilter} />
			<PostsList posts={filteredPosts} />
		</Container>
	)
}

export default Main;