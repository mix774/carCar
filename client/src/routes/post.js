import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import classes from './css/Post.module.css'
import { Container } from "@mui/system";

export default function Post() {

	const { id } = useParams();
	const [post, setPost] = useState({})

	useEffect(() => {
		const getPost = () => {
			axios.get(`/posts/${id}`).then((res) => {
				setPost(res.data)
			}).catch(error => console.log(`error: ${error}`))
		}
		getPost()
	}, [id])

	return (
		<Container
			fixed
			width="100%"
			height="100%"
		>
			<Container
				className={classes.header}
			>
				<CardMedia
					style={{ objectFit: "contain", cursor: "pointer" }}
					className={classes.image}
					component="img"
					width="560"
					height="320"
					image={`http://localhost:3000/image/${post.images[0]}`}
				/>
			</Container>
			<Container className={classes.description}>
				<Typography
				component="div"
				style={{margin: "15px 0 15px 0", fontSize: "18px"}}
				className={classes.descriptionHeader}
				>
					Описание
				</Typography>
				<p className={classes.amout} style={{backgroundColor: "#d7d7d7", fontSize: "18px", padding: "10px"}}>
					Количество владельцев: {post.amountOfOwners}
				</p>
				<p className={classes.year} style={{ fontSize: "18px", padding: "5px", marginTop: "0"}}>
					Год выпуска: {post.year}
				</p>
				<p className={classes.price} style={{ backgroundColor: "#d7d7d7", fontSize: "18px", padding: "10px"}}>
					Цена: {post.price}
				</p>
				<p className={classes.mileage} style={{ fontSize: "18px", padding: "10px"}}>
					Пробег: {post.mileage}
				</p>
				<p className={classes.description} style={{ backgroundColor: "#d7d7d7", fontSize: "18px", padding: "10px"}}>
					Описание: {post.description}
				</p>
			</Container>


		</Container>
	)
}