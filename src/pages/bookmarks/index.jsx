import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import useStore from "../../ions/hooks/storeFormData";
import PlantCard from "../../organisms/cards";

const Page = () => {
	const plantCards = useStore(state => state.plantCards);

	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<h1 sx={{ mb: "1.5rem" }}>Plant Buddy</h1>
			{plantCards
				.filter(plantCard => plantCard.bookmarked === true)
				.map((plant, index) => {
					return <PlantCard key={plant.id} index={index} {...plant} />;
				})}
		</Layout>
	);
};

export default Page;
