import Head from "next/head";
import React from "react";
import Typography from "@mui/material/Typography";
import SeedCard from "../../organisms/seedCard";
import useStore from "../../ions/hooks/storeFormData";
import FooterSeed from "../../organisms/footerSeed";
import Header from "../../organisms/header";

const Page = () => {
	const seedCards = useStore(state => state.seedCards);
	return (
		<div>
			<Header>
				<Head>
					<title key="title">My Capstone Project</title>
					<meta
						key="description"
						name="description"
						content="This is my capstone project"
					/>
				</Head>
			</Header>
			<Typography component="h3" variant="h4" color="primary">
				Seed Exchange
			</Typography>
			{seedCards.map((card, index) => {
				return <SeedCard key={card.id} index={index} {...card} />;
			})}

			<FooterSeed />
		</div>
	);
};

export default Page;
