import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import PlantCard from "../../organisms/cards";
import useStore from "../../ions/hooks/storeFormData";
import Typography from "@mui/material/Typography";

const Page = () => {
	const plantCards = useStore(state => state.plantCards);

	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<Typography sx={{ mb: "1.5rem" }} component="h3" variant="h3" color="primary">
				Plant Buddy
			</Typography>

			{plantCards.map((plant, index) => {
				return <PlantCard key={plant.id} index={index} {...plant} />;
			})}
		</Layout>
	);
};

export default Page;
