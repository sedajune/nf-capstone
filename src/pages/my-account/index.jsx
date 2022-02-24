import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ButtonLogin = styled(Button)({
	border: "none",
	boxShadow: "none",
	fontSize: "10px",
	background: "none",
});

const Page = () => {
	const { data: session } = useSession();
	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			{session ? (
				<div>
					<Avatar
						src={session.user.image}
						alt={session.user.name}
						sx={{ m: "auto", mt: "20px", border: "1px solid" }}
					/>
					<Typography variant="h4" sx={{ ml: "20px" }}>
						Welcome back, {session.user.name}!
					</Typography>
				</div>
			) : (
				<ButtonLogin onClick={() => signIn("github")}>
					<GitHubIcon />
				</ButtonLogin>
			)}
			<Box>
				<Button sx={{ ml: "120px", mt: "250px" }} onClick={() => signOut()}>
					Logout
				</Button>
			</Box>
		</Layout>
	);
};

export default Page;
