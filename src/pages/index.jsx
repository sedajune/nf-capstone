import Head from "next/head";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import logo from "../ions/images/logo.png";
import { signIn } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Page = () => {
	const router = useRouter();

	return (
		<Box
			position="absolute"
			width="390"
			height="844"
			sx={{ top: 0, left: 0, right: 0, bottom: 0 }}
		>
			<Head>
				<title key="title">home</title>
				<meta key="description" name="description" content="Home" />
			</Head>
			<img src={logo} alt="logo plant buddy" z-index="40" />
			<Typography
				variant="h1"
				style={{
					height: 0,
					left: 50,
					top: 100,
					width: "100%",
					position: "relative",
					zIndex: 1,
					color: "white",
				}}
			>
				Plant Buddy
			</Typography>
			<div display="flex" justify-content="center" align-items="center" margin="0px">
				<Image
					src="https://images.unsplash.com/photo-1532978678576-8e855616398d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=markus-spiske-k2BDz7QXuJM-unsplash.jpg"
					alt="main plant screen"
					layout="fill"
					quality="100"
				/>
			</div>
			<Button
				fullWidth
				position="relative"
				zindex="2"
				style={{ top: 700 }}
				endIcon={<ArrowCircleRightOutlinedIcon />}
				onClick={() => router.push("/main")}
			>
				Enter
			</Button>
			<Button
				fullWidth
				startIcon={<GitHubIcon />}
				style={{ top: 590, background: "black" }}
				onClick={() => signIn("github")}
			>
				Sign in with GitHub
			</Button>
		</Box>
	);
};

export default Page;
