import Head from "next/head";
import React from "react";
import PlantCard from "../../organisms/cards";
import useStore from "../../ions/hooks/storeFormData";
import FooterAdd from "../../organisms/footerAdd";
import Header from "../../organisms/header";
import Map from "../../molecules/map";

const Page = () => {
	const plantCards = useStore(state => state.plantCards);

	return (
		<div>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<Header />

			{plantCards.map((plant, index) => {
				return <PlantCard key={plant.id} index={index} {...plant} />;
			})}
			<Map />
			<FooterAdd />
		</div>
	);
};

export default Page;
