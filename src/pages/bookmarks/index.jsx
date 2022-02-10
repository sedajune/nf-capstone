import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<h1 sx={{ mb: "1.5rem" }}>Plant Buddy</h1>
		</Layout>
	);
};

export default Page;
