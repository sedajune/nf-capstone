import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import useStore from "../../ions/hooks/storeFormData";
import PlantCard from "../../organisms/cards";
import Typography from "@mui/material/Typography";

const Page = () => {
	const plantCards = useStore(state => state.plantCards);

	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<Typography sx={{ m: "12px" }} component="h3" variant="h5" color="primary">
				Bookmarks
			</Typography>
			{plantCards
				.filter(plantCard => plantCard.bookmarked === true)
				.map((plant, index) => {
					return <PlantCard key={plant.id} index={index} {...plant} />;
				})}
		</Layout>
	);
};

export default Page;
