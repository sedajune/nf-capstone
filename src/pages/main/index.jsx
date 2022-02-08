import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../organisms/layout";
import PlantCard from "../../organisms/cards";
import Button from "../../atoms/button";
import { useRouter } from "next/router";
import useStore from "../../ions/hooks/storeFormData";

const Page = () => {
	const router = useRouter();
	const plantCards = useStore(state => state.plantCards);

	useEffect(() => {
		console.log("plantCards", plantCards);
	}, [plantCards]);

	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<h1>Plant Buddy</h1>
			<Button onClick={() => router.push("/form")}>Create new entry</Button>
			<br />
			<br />
			{plantCards.map(plant => {
				return <PlantCard key={plant.id} {...plant} />;
			})}

			<br />
		</Layout>
	);
};

export default Page;
