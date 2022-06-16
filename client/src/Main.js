import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PostsList from './components/PostsList';
import TypeBar from './components/TypeBar';
import classes from './css/Main.module.css'
import { getAllActivePosts } from './services/PostService.js'
import axios from 'axios';
import {isUser} from './utils'

function Main() {

	const [favorites, setFavorites] = useState([])
	const [posts, setPosts] = useState([])
	const [typeFilter, setTypeFilter] = useState('')

	useEffect(() => {
		getAllActivePosts().then(res => {
			setPosts(res.data)
		})
		if (isUser()) {
			loadFavorites()
		}
	}, [])

	const handleTypeFilter = (type) => {
		if (type) {
			setTypeFilter(type)
		}
	}

	const filteredPosts = typeFilter ? posts.filter(p => p.type._id === typeFilter) : posts;

	const loadFavorites = () => {
		axios.get('/user/favoritesIds', {
			headers: {
				'Authorization': `Bearer ${localStorage.token}`
			}
		}).then(res => {
			if (res.status === 200) {
				console.log(res.data);
				setFavorites(res.data.favorites)
			} else {
				console.log('Unable to fetch models')
			}
		})
	}

	return (
		<Container fixed >
			<div className={classes.startPage}>
				<p>Выберите машину своей мечты</p>
			</div>
			<TypeBar handleTypeFilter={handleTypeFilter} />
			<PostsList reloadFavorites={loadFavorites} posts={filteredPosts} favorites={favorites}/>
		</Container>
	)
}

export default Main;