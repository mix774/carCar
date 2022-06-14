import React from "react";
import Grid from '@mui/material/Grid';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from "../components/FeaturedPost";

export default function About() {
	const mainFeaturedPost = {
		title: 'Title of a longer featured blog post',
		description:
			"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
		image: 'https://source.unsplash.com/random',
		imageText: 'main image description',
		linkText: 'Continue reading…',
	};

	const featuredPost1 = 
		{
			title: 'Featured post',
			description:
				'This is a wider card with supporting text below as a natural lead-in to additional content.',
			image: 'https://source.unsplash.com/random',
			imageLabel: 'Image Text',
		}
		
	const featuredPost2 = {
		title: 'Post title',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageLabel: 'Image Text',
	}
	return (
		<main style={{ padding: "1rem 0" }}>
			<MainFeaturedPost post={mainFeaturedPost} />
			<Grid container spacing={4}>
				<FeaturedPost post={featuredPost1}/>
				<FeaturedPost post={featuredPost2}/>
			</Grid>
		</main>
	);
}