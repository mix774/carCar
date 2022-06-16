import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import classes from './css/Contacts.module.css'

export default function Contacts() {
	return (
		<Box component="footer" className={classes.footer}>
			<Container maxWidth="lg" className={classes.contactInfo}>
				<Typography
					component="h3"
					variant="h5"
					style={{ marginBottom: "25px", textAlign: "center"}}
					className={classes.title}
				>
					Контактная информация
				</Typography>
				<Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between" }} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
					<Container sx={{ display: "flex" }} style={{ paddingLeft: "0" }} className={classes.place}>
						<Typography marginRight="20px">
							<PlaceIcon />
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="span"
							marginLeft="-20px"
							width="75%"
						>
							Россия, Москва и Московская область, Москва, МКАД, 50-й километр, внешняя сторона, м. Озёрная, Говорово
						</Typography>
					</Container>
					<Container sx={{ display: "flex" }} style={{ paddingLeft: "0", paddingRight: "0" }} className={classes.mobile}>
						<Typography style={{ marginLeft: "100px", marginRight: "5px" }}>
							<CallIcon />
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="span"
							width="65%"
						>
							+7 (917) 560 04 29<br />
							+7 (980) 903 20 61

						</Typography>
					</Container>
				</Container>
			</Container>
		</Box>

	);
}