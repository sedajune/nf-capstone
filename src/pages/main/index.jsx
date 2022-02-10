import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import PlantCard from "../../organisms/cards";
import Button from "../../atoms/button";
import { useRouter } from "next/router";
import useStore from "../../ions/hooks/storeFormData";

const Page = () => {
	const router = useRouter();
	const plantCards = useStore(state => state.plantCards);

	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<h1 sx={{ mb: "1.5rem" }}>Plant Buddy</h1>
			<Button onClick={() => router.push("/form")}>Create new entry</Button>
			<Button onClick={() => router.push("/bookmarks")}>Bookmarks</Button>

			{plantCards.map(plant => {
				return <PlantCard key={plant.id} {...plant} />;
			})}
		</Layout>
	);
};

export default Page;
