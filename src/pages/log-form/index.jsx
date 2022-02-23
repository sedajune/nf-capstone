import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import LogForm from "../../organisms/log-form";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>

			<LogForm />
		</Layout>
	);
};

export default Page;
