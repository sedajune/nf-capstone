import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import Typography from "@mui/material/typography";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<Typography component="h1" variant="h3">
				Plant Log
			</Typography>
		</Layout>
	);
};

export default Page;
