import Head from "next/head";
import React from "react";
import Typography from "@mui/material/Typography";
import LogCard from "../../organisms/log-card";
import useStore from "../../ions/hooks/storeFormData";
import Footer from "../../organisms/footer";
import Header from "../../organisms/header";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";

const Page = () => {
	const logCards = useStore(state => state.logCards);
	const router = useRouter();
	return (
		<>
			<Header>
				<Head>
					<title key="title">My Capstone Project</title>
					<meta
						key="description"
						name="description"
						content="This is my capstone project"
					/>
				</Head>
			</Header>
			<Typography sx={{ m: "12px" }} component="h3" variant="h5" color="primary">
				My Plant Log
			</Typography>
			<Button
				onClick={() => {
					router.push("/log-form");
				}}
			>
				<CreateIcon />
				Create new entry
			</Button>
			{logCards.map((card, index) => {
				return <LogCard key={card.id} index={index} {...card} />;
			})}

			<Footer />
		</>
	);
};

export default Page;
