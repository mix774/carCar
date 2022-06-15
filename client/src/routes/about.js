import React from "react";
import Grid from '@mui/material/Grid';
import MainFeaturedPost from '../components/about/MainFeaturedPost';
import FeaturedPost from "../components/about/FeaturedPost";
import Main from '../components/about/MainInAbout'
import Sidebar from '../components/about/Sidebar'

export default function About() {
	const mainFeaturedPost = {
		title: 'carCar',
		description:
			"Компания, реализующая \"проверенные надежные одобренные\" автомобили  ",
		image: 'https://tradein-kuntsevo.ru/upload/medialibrary/3a7/15.jpg',
		imageText: 'main image description',
		linkText: 'Continue reading…',
	};

	const featuredPost1 =
	{
		title: 'Как правильно провести проверку перед покупкой б/у автомобиля',
		description:
			'Узнайте, как правильно проверить и на что обратить внимание перед покупкой автомобиля с рук.',
		image: 'https://avtozakony.ru/wp-content/uploads/2016/12/bez-dokumentov1.jpg',
		imageLabel: 'Image Text',
	}

	const featuredPost2 = {
		title: 'Как подобрать автомобиль под свои нужды и немного больше',
		description:
			'Узнайте, как определить и понять какой именно автомобиль вам подходит больше всего',
		image: 'https://otvet.imgsmail.ru/download/272190305_a9a28331d29f22b09030f324a9100203_800.jpg',
		imageLabel: 'Image Text',
	}

	const sidebar = {
		title: 'О деятельности',
		description:
			'Мы помогаем людям преобретать надежные б/у автомобили, в которых можно быть уверенными, ведь мы и компания предоставляющая услуги по поиску б/у автомобилей.',
	};

	

	return (
		<main style={{ padding: "1rem 0" }} >
			<MainFeaturedPost post={mainFeaturedPost} />
			<Grid container spacing={4}>
				<FeaturedPost post={featuredPost1} />
				<FeaturedPost post={featuredPost2} />
			</Grid>
			<Grid container spacing={5} sx={{ mt: 3 }}>
				<Main title="checked approved reliable car" />
				<Sidebar
					title={sidebar.title}
					description={sidebar.description}
				/>
			</Grid>
		</main>
	);
}