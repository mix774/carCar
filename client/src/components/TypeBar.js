import React, { useEffect, useState } from "react";
import { getAllTypes } from '../services/TypesService'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import classes from './css/TypeBar.module.css'

function TypeBar() {
	const [types, setTypes] = useState([])

	useEffect(() => {
		getAllTypes().then(fetchedTypes => {
			console.log(fetchedTypes)
			setTypes(fetchedTypes)
		})
	}, [])

	return (
		<Grid sx={{ flexGrow: 1 }} container spacing={5} style={{marginBottom: "15px"}}>
			<Grid item xs={12}>
				<Grid container justifyContent="space-between">
					{types.map((type, index) => (
						<Grid key={index} item>
							<CardActionArea component="a" >
								<Card  className={classes.types}>
									<CardMedia
										component="img"
										
									/>
									<CardContent>
										<Typography variant="body2" color="text.secondary" component="p" className={classes.title}>
											{type.name}
										</Typography>
									</CardContent>
									<Collapse timeout="auto" unmountOnExit>
									</Collapse>
								</Card>
							</CardActionArea>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	)
};
export default TypeBar;