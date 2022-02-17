import Head from "next/head";
import React from "react";
import Typography from "@mui/material/Typography";
import SeedCard from "../../organisms/seedCard";
import FooterAdd from "../../organisms/footerAdd";
import Header from "../../organisms/header";

const Page = () => {
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
			<SeedCard />
			<FooterAdd />
		</div>
	);
};

export default Page;
