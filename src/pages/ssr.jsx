/*import axios from "axios";
import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";

const Page = ({ data, error }) => {
	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>Plant Buddy</h1>
			{error && <div>{error.message}</div>}
			{data && (
				<pre>
					<code>{JSON.stringify(data, null, 4)}</code>
				</pre>
			)}
		</Layout>
	);
};

export default Page;

export const getServerSideProps = async () => {
	try {
		const { data } = await axios.get("");
		return {
			props: { data },
		};
	} catch (error) {
		return {
			props: { error: { message: error.message } },
		};
	}
};
*/
