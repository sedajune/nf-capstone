import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import Typography from "@mui/material/Typography";
import DiyCard from "../../organisms/diy-card";
import Box from "@mui/material/Box";
//import dynamic from "next/dynamic";

//const NoSsrMap = dynamic(() => import("../../molecules/map"), { ssr: false });

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<Typography sx={{ m: "12px" }} component="h3" variant="h5" color="primary">
				DIY Ideas
			</Typography>
			<Box>
				<DiyCard />
			</Box>
		</Layout>
	);
};

export default Page;
