import Head from "next/head";
import React from "react";
import Typography from "@mui/material/Typography";
import SeedCard from "../../organisms/seedCard";
import useStore from "../../ions/hooks/storeFormData";
import FooterSeed from "../../organisms/footerSeed";
import Header from "../../organisms/header";
import SearchBar from "../../molecules/search-bar";

const Page = () => {
	const seedCards = useStore(state => state.seedCards);
	return (
		<>
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
			<Typography sx={{ m: "12px" }} component="h3" variant="h5" color="primary">
				Seed / Seedlings Exchange
			</Typography>
			<SearchBar />
			{seedCards.map((card, index) => {
				return <SeedCard key={card.id} index={index} {...card} />;
			})}

			<FooterSeed />
		</>
	);
};

export default Page;
