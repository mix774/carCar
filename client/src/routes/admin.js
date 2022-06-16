import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getAllPosts } from '../services/PostService.js'
import { Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import classes from './css/Admin.module.css'
import { activatePost, deactivatePost } from '../services/PostService'

function Admin() {

	const [posts, setPosts] = useState([])

	const fetchPosts = () => {
		getAllPosts().then(res => {
			setPosts(res.data)
		})
	}

	const deactivatePostHander = (postId) => {
		deactivatePost(postId).then(res => {
			if (res.status === 201) {
				fetchPosts()
			} else {
				console.log('Unable to deactivate post')
			}
		})
	}

	const activatePostHander = (postId) => {
		activatePost(postId).then(res => {
			if (res.status === 201) {
				fetchPosts()
			} else {
				console.log('Unable to activate post')
			}
		})
	}

	const renderStatus = (params) => {
		return <>{params.row.active === true ?
			<CheckCircle color="success" onClick={() => deactivatePostHander(params.row.id)} />
			: <CheckCircle color="disabled" onClick={() => activatePostHander(params.row.id)} />}</>
	}


	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'model', headerName: 'Модель', width: 130 },
		{ field: 'type', headerName: 'Тип кузова', width: 130 },
		{
			field: 'year',
			headerName: 'Год',
			type: 'number',
			width: 90,
		},
		{
			field: 'amountOfOwners',
			headerName: 'Количество владельцев',
			type: 'number',
			width: 200,
		},
		{
			field: 'price',
			headerName: 'Цена',
			type: 'number',
		},
		{
			field: 'createdAt',
			headerName: 'Создано',
			type: 'dateTime',
			width: 200,
		},
		{
			field: 'active',
			headerName: 'Статус',
			type: 'boolean',
			renderCell: renderStatus
		}
	];

	useEffect(() => {
		fetchPosts()
	}, [])

	const nav = useNavigate()

	return (
		<main style={{ width: '100%' }}>

			<Button className={classes.addButton} style={{ width: '100%', background: 'green', marginBottom: '25px' }} variant="contained"
				onClick={() => { nav('/addpost') }}>Добавить объявление</Button>
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid
					className={classes.row}
					rows={posts.map((post, index) =>
					({
						id: `${post._id}`,
						model: `${post.model.name}`,
						type: `${post.type.name}`,
						year: `${post.year}`,
						amountOfOwners: `${post.amountOfOwners}`,
						price: `${post.price}`,
						mileage: `${post.mileage}`,
						createdAt: `${post.createdAt}`,
						active: post.active
					}))}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
				/>
			</div>
		</main>
	)
}

export default Admin;