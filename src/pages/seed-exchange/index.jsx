import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../organisms/layout";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Input } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";

const CLOUDNAME = process.env.NEXT_PUBLIC_CLOUDNAME;
const PRESET = process.env.NEXT_PUBLIC_PRESET;

const Page = () => {
	const [image, setImage] = useState(null);

	const Image = styled.img`
		max-width: 40%;
		max-height: 40%;
		border: 4px solid #e4eaeb;
		border-radius: 50%;
	`;

	const upload = event => {
		const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

		const formData = new FormData();
		formData.append("file", event.target.files[0]);
		formData.append("upload_preset", PRESET);

		axios
			.post(url, formData, {
				headers: {
					"Content-type": "multipart/form-data",
				},
			})
			.then(response => {
				console.log(response);
				setImage(response.data.url);
			})
			.catch(err => console.error(err));
	};

	return (
		<Layout>
			<Head>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<Typography component="h1" variant="h3">
				Seed Exchange
			</Typography>
			<Box component="span" sx={{ p: 2 }}>
				{image ? (
					<Image alt="" src={image} />
				) : (
					<label htmlFor="icon-button-file">
						<Input
							accept="image/*"
							id="icon-button-file"
							style={{ display: "none" }}
							type="file"
							onChange={upload}
						/>
						<IconButton color="primary" aria-label="upload picture" component="span">
							<PhotoCamera />
						</IconButton>
					</label>
				)}
			</Box>
		</Layout>
	);
};

export default Page;
