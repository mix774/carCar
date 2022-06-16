import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import classes from './css/Footer.module.css'

function Footer(props) {

	return (
		<Box component="footer" className={classes.footer}>
			<hr />
			<Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
				<Container maxWidth="lg" className={classes.contactInfo}>
					<Typography
						component="h3"
						style={{ marginBottom: "5px" }}
					>
						Контактная информация
					</Typography>
					<Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between" }} style={{paddingLeft: "0px", paddingRight: "0px"}}>
						<Container sx={{ display: "flex" }} style={{paddingLeft: "0"}}>
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
						<Container sx={{ display: "flex" }} style={{paddingLeft: "0", paddingRight: "0"}}>
							<Typography style={{marginLeft: "100px", marginRight: "5px"}}>
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

				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="span"
					width="20%"

				>
					<Typography

						style={{ color: 'black', marginBottom: '5px' }}>
						Соц. сети
					</Typography>
					<Typography style={{ marginTop: "" }}>
						<Typography
							component="span"
							style={{ display: "flex", marginBottom: "5px" }}>
							<FacebookIcon /> Facebook
						</Typography>

						<Typography
							component="span"
							style={{ display: "flex", marginBottom: "5px" }}>
							<InstagramIcon /> Instagram
						</Typography>

						<Typography
							component="span"
							style={{ display: "flex" }}>
							<TwitterIcon /> Twitter
						</Typography>
					</Typography>
				</Typography>

			</Container>
		</Box>
	);
}


export default Footer;