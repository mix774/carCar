import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import classes from './css/PostCard.module.css'
import { Container } from '@mui/system';


function PostCard(props) {
	const { post } = props;

	return (
		<Grid item xs={13} md={6} >
			<CardActionArea component="a" href={`/post/${post._id}`}>
				<Card sx={{ height: 450 }} className={classes.main}>
					<Typography component="h3" variant="h5" className={classes.header}>
							{`${post.model.brand.name} ${post.model.name} ${post.year}`}
					</Typography>
					<CardMedia
						style={{ objectFit: "contain" }}
						className={classes.image}
						component="img"
						width="560"
						height="320"
						image={`http://localhost:3000/image/${post.images[0]}`}

					/>
					<Container style={{display: "flex", justifyContent: "space-between"}}>
						<CardActions disableSpacing style={{width: "60%"}}>
							<IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>
						</CardActions>
						<Typography style={{fontSize: "20px", width: "70%", display: "flex", justifyContent: "right", alignItems: "center"}}>
						Стоимость: {`${post.price}`} руб.
						</Typography>
					</Container>

					<Collapse timeout="auto" unmountOnExit>
					</Collapse>
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