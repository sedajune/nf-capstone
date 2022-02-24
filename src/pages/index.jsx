import Head from "next/head";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import logo2 from "../ions/images/logo2.png";
import { signIn } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";

const StyledImage = styled(Image)`
	object-fit: cover;
	object-position: 50% 50%;
`;

const Page = () => {
	const router = useRouter();

	return (
		<Box sx={{ inset: 0, position: "absolute" }}>
			<Head>
				<title key="title">home</title>
				<meta key="description" name="description" content="Home" />
			</Head>

			<StyledImage
				src="https://images.unsplash.com/photo-1532978678576-8e855616398d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=markus-spiske-k2BDz7QXuJM-unsplash.jpg"
				alt="main plant screen"
				layout="fill"
				quality="100"
				height="576"
				width="384"
			/>

			<Typography
				variant="h1"
				sx={{
					px: 2,
					pt: 12,
					color: "white",
					position: "relative",
				}}
			>
				<img src={logo2.src} alt="logo plant buddy" />
				lant Buddy
			</Typography>
			<Stack
				gap={2}
				sx={{ position: "absolute", bottom: 0, left: 0, right: 0, px: 2, pb: 5 }}
			>
				<Button
					fullWidth
					endIcon={<ArrowCircleRightOutlinedIcon />}
					onClick={() => router.push("/main")}
				>
					Enter
				</Button>
				<Button
					fullWidth
					startIcon={<GitHubIcon />}
					sx={{ background: "black" }}
					onClick={() => signIn("github")}
				>
					Sign in with GitHub
				</Button>
			</Stack>
		</Box>
	);
};

export default Page;
