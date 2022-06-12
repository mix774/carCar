import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function PostCard(props) {
	const { post } = props;

	const ExpandMore = styled((props) => {
		const { expand, ...other } = props;
		return <IconButton {...other} />;
	})(({ theme, expand }) => ({
		transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
		  duration: theme.transitions.duration.shortest,
		}),
	}));
	
	return (
	<Grid item xs={13} md={3}>
	<CardActionArea component="a" href="#">
	  <Card sx={{ height: 300}}>
		<Typography component="h3" variant="h5">
			{`${post.model.name} ${post.type.name} ${post.year}`}
		</Typography>
		<CardMedia
		  component="img"
		  height="194"
		  image={`http://localhost:3000/image/${post.images[0]}`} 
		  alt="Paella dish"
		/>
		<CardContent>
			<Typography variant="body2" color="text.secondary">
				
			</Typography>
		</CardContent>
		<CardActions disableSpacing>
		<IconButton aria-label="add to favorites">
			<FavoriteIcon />
		</IconButton>
		</CardActions>
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
		amounOfOwners: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		mileage: PropTypes.number.isRequired,
	}).isRequired,
};

export default PostCard;