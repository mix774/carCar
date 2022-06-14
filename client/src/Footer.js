import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import classes from './css/Footer.module.css'


function Footer(props) {

	return (
		<Box component="footer" sx={{ bgcolor: 'background.paper', marginTop: '150px', marginBottom: "15px", paddingTop: "20em" }}>

			<hr />

			<Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", marginTop: "-15px" }}>

				<Container maxWidth="lg">
					<Typography
						component="h3"
					>
						Контактная информация
					</Typography>
					<Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="p"
							marginLeft="-20px"
							width="45%"
						>
							Россия, Москва и Московская область, Москва, МКАД, 50-й километр, внешняя сторона, м. Озёрная, Говорово
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="p"
							marginRight="150px"
						>
							+7 (917) 560 04 29<br />
							+7 (980) 903 20 61

						</Typography>
					</Container>
				</Container>

				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="p"
					width="20%"

				>
					<Typography
						component="p"
						style={{ color: 'black', marginBottom: '15px' }}>
						Соц. сети
					</Typography>
					<Typography style={{ marginTop: "" }}>
						<Typography
							component="div"
							style={{ display: "flex" }}>
							<FacebookIcon /> Facebook
						</Typography>

						<Typography
							component="div"
							style={{ display: "flex" }}>
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