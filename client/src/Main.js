import React, { useState, useEffect } from 'react';
import PostsList from './components/PostsList';
import TypeBar from './components/TypeBar';
import classes from './css/Main.module.css'
import { getAllPosts } from './services/PostService.js'




function Main() {

	const [posts, setPosts] = useState([])
	const [typeFilter, setTypeFilter] = useState('')

	useEffect(() => {
		getAllPosts().then(fetchedPosts => {
			console.log(`All posts ${fetchedPosts.length}`)
			setPosts(fetchedPosts)
		})
	}, [])

	const handleTypeFilter = (type) => {
		if (type) {
			setTypeFilter(type)
		}
	}

	const filteredPosts = typeFilter ? posts.filter(p => p.type._id === typeFilter) : posts;

	return (
		<main>
			<div className={classes.startPage}>
				<p>Выберите машину своей мечты</p>
			</div>
			<TypeBar handleTypeFilter={handleTypeFilter} />
			<PostsList posts={filteredPosts} />
		</main>
	)
}

export default Main;