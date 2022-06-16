import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import classes from './css/PostCard.module.css'
import { Container } from '@mui/system';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function PostCard({ post, isFavorite, reloadFavorites }) {

	const addToFavorites = (postId) => {
		axios.put(`/user/addFav/${postId}`, {}, {
			headers: {
				'Authorization': `Bearer ${localStorage.token}`
			}
		}).then(res => {
			if (res.status === 201) {
				reloadFavorites()
			} else {
				console.log('Unable to add favorites')
			}
		})
	}

	const removeFavorites = (postId) => {
		axios.delete(`/user/removeFav/${postId}`, {
			headers: {
				'Authorization': `Bearer ${localStorage.token}`
			}
		}).then(res => {
			if (res.status === 201) {
				reloadFavorites()
			} else {
				console.log('Unable to remove favorites')
			}
		})
	}

	const navigate = useNavigate();
	const moveToPost = (postId) => {
		navigate(`/post/${postId}`)
	}

	return (
		<Grid item xs={13} md={6} >
			<CardActionArea>
				<Card sx={{ height: 450 }} bgcolor="white" className={classes.main} >
					<Typography component="h3" variant="h5" className={classes.header} onClick={() => moveToPost(post._id)} style={{ cursor: 'pointer' }}>
						{`${post.model.brand.name} ${post.model.name} ${post.year}`}
					</Typography>
					<CardMedia
						style={{ objectFit: "contain", cursor: "pointer" }}
						className={classes.image}
						component="img"
						width="560"
						height="320"
						image={`http://localhost:3000/image/${post.images[0]}`}
						onClick={() => moveToPost(post._id)}
					/>
					<Container style={{ display: "flex", justifyContent: "space-between" }}>
						<CardActions disableSpacing style={{ width: "60%" }}>
							<IconButton aria-label="add to favorites" onClick={() => isFavorite ? removeFavorites(post._id) : addToFavorites(post._id)}>
								<FavoriteIcon color={isFavorite ? 'warning' : 'disabled'} />
							</IconButton >
						</CardActions>
						<Typography style={{ fontSize: "20px", width: "70%", display: "flex", justifyContent: "right", alignItems: "center" }}>
							Стоимость: {`${post.price}`} руб.
						</Typography>
					</Container>
				</Card>
			</CardActionArea>
		</Grid>
	);
}


PostCard.propTypes = {
	post: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		year: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		amountOfOwners: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		mileage: PropTypes.number.isRequired,
	}).isRequired,
};

export default PostCard;