import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">home</title>
				<meta key="description" name="description" content="Home" />
			</Head>
			<h1>Home</h1>
		</Layout>
	);
};

export default Page;
