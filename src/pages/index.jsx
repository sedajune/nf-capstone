import Head from "next/head";
import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Button from "../atoms/button";
import { useRouter } from "next/router";
import { spacing } from "@mui/system";

const pinBoard = ({ children, className }) => {
	return <div className={className}>{children} </div>;
};

const PinBoardStyled = styled(pinBoard)`
	background: green;
`;

const Page = () => {
	const router = useRouter();

	return (
		<PinBoardStyled>
			<Head>
				<title key="title">home</title>
				<meta key="description" name="description" content="Home" />
			</Head>
			<Typography sx={{ mb: "1.5rem" }} component="h3" variant="h3">
				Plant Buddy
			</Typography>

			<Image
				src="https://images.unsplash.com/photo-1532978678576-8e855616398d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
				alt="seedlings"
				width="400vw"
				height="600vw"
				sizes="100vw"
				layout="responsive"
				quality="100"
				priority="true"
				sx={{ mb: "5rem" }}
			/>
			<Button onClick={() => router.push("/main")}>Enter</Button>
		</PinBoardStyled>
	);
};

export default Page;
