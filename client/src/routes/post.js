import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Typography } from "@mui/material";


export default function Post() {

	const { id } = useParams();
	const [post, setPost] = useState({})

	useEffect(() => {
		const getPost = () => {
			console.log('getPost');
			axios.get(`/posts/${id}`).then((res) => {
				setPost(res.data)
			}).catch(error => console.log(`error: ${error}`))
		}
		getPost()
	}, [id])

	return (
		<Typography
			component="div"
			align="center"
			background="red"
			width="100%"
			height="100%"
		>
			<Typography
				component="p"
			>{post._id}</Typography>
			<Typography
			component="p"
			>jwkflnjdsifl</Typography>
		</Typography>
	)
}