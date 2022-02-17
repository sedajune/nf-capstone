import Head from "next/head";
import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import Header from "../organisms/header";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const pinBoard = ({ children, className }) => {
	return <div className={className}>{children} </div>;
};

const PinBoardStyled = styled(pinBoard)`
	background: white;
`;

const Page = () => {
	const router = useRouter();

	return (
		<PinBoardStyled>
			<Head>
				<title key="title">home</title>
				<meta key="description" name="description" content="Home" />
			</Head>
			<Header />
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
			<Button
				variant="outlined"
				fullWidth
				endIcon={<ArrowCircleRightOutlinedIcon />}
				onClick={() => router.push("/main")}
			>
				Enter
			</Button>
		</PinBoardStyled>
	);
};

export default Page;
