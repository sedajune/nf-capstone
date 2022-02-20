import Head from "next/head";
import React from "react";
import PlantCard from "../../organisms/cards";
import useStore from "../../ions/hooks/storeFormData";
import FooterAdd from "../../organisms/footerAdd";
import Header from "../../organisms/header";

const Page = () => {
	const plantCards = useStore(state => state.plantCards);

	return (
		<div>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<Header />

			{plantCards.map((plant, index) => {
				return <PlantCard key={plant.id} index={index} {...plant} />;
			})}
			<FooterAdd />
		</div>
	);
};

export default Page;
