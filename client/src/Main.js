import { Typography } from '@mui/material';
import React from 'react';
import PostsList from './components/PostsList';
import TypeBar from './components/TypeBar';
import classes from './css/Main.module.css'


function Main() {

	return (
		<main>
			<div className={classes.startPage}>
				<p>Выберите машину своей мечты</p>
			</div>
			<TypeBar />
			<PostsList />
		</main>
	)
}

export default Main;