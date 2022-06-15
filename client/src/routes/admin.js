import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getAllPosts } from '../services/PostService.js'
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import classes from './css/Admin.module.css'

function Admin() {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'model', headerName: 'Model', width: 130 },
		{ field: 'type', headerName: 'Type', width: 130 },
		{
			field: 'year',
			headerName: 'Year',
			type: 'number',
			width: 90,
		},
		{
			field: 'amountOfOwners',
			headerName: 'Amount of owners',
			type: 'number',
			width: 200,
		},
		{
			field: 'price',
			headerName: 'Price',
			type: 'number',
		},
		{
			field: 'createdAt',
			headerName: 'Created',
			type: 'dateTime',
			width: 200,
		},
		{
			field: 'active',
			headerName: 'Status',
			type: 'boolean',
		}
	];

	const [posts, setPosts] = useState([])

	useEffect(() => {
		getAllPosts().then(fetchedPosts => {
			console.log(fetchedPosts)
			setPosts(fetchedPosts)
		})
	}, [])

	function icon(post) {
		if (post.active) {
			console.log('cwedcs');
			return <Chip label="primary" color="primary" />
		} else {
			return <Chip label="primary" color="primary" />
		}
	}

	const nav = useNavigate()

	return (
		<main style={{ width: '100%' }}>

			<Button className={classes.addButton} style={{ width: '100%', background: 'green', marginBottom: '25px' }} variant="contained" onClick={() => {nav('/addpost')}}>Добавить объявление</Button>
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid
					className={classes.row}
					rows={posts.map((post, index) =>
					({
						id: index,
						model: `${post.model.name}`,
						type: `${post.type.name}`,
						year: `${post.year}`,
						amountOfOwners: `${post.amountOfOwners}`,
						price: `${post.price}`,
						mileage: `${post.mileage}`,
						createdAt: `${post.createdAt}`,
						active: `${icon(post)}`
					}))}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
		</main>
	)
}

export default Admin;