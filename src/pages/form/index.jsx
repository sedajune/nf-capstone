import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import PlantForm from "../../organisms/forms";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<h1>Plant Buddy</h1>
			<PlantForm></PlantForm>
		</Layout>
	);
};

export default Page;
