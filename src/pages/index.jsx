import Head from "next/head";
import React from "react";
import Button from "../atoms/button";
import useGet from "../ions/hooks/fetch/get";
import Layout from "../organisms/layout";
import PlantForm from "../organisms/forms";

const Page = () => {
	const { data, loading, error } = useGet("/api/hello");

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
