import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function PostCard(props) {
	const { post } = props;

	return (
		<Grid item xs={12} md={6}>
			<CardActionArea component="a" href="#">
				<Card sx={{ display: 'flex' }}>
					<CardContent sx={{ flex: 1 }}>
						<Typography component="h2" variant="h5">
							{post.brand} {post.model}
						</Typography>
{/* 						<Typography component="subtitle1" variant="h5">
							{post.model}
						</Typography> */}
						<Typography variant="subtitle1" color="text.secondary">
							{post.amounOfOwners}
						</Typography>
						<Typography variant="subtitle1" paragraph>
							Цена {post.price}
						</Typography>
						<Typography variant="subtitle1" paragraph>
							{post.description}
						</Typography>
					</CardContent>
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
		amounOfOwners: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		mileage: PropTypes.number.isRequired,
	}).isRequired,
};

export default PostCard;