import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../organisms/layout";
import Typography from "@mui/material/Typography";
import Axios from "axios";
import { Image } from "cloudinary-react";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

const Page = () => {
	const [imageSelected, setImageSelected] = useState("");

	const uploadImage = () => {
		const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

		const formData = new FormData();
		formData.append("file", uploadImage);
		formData.append("upload_preset", PRESET);

		Axios.post(url, formData)
			.then(saveImage)
			.catch(err => console.error(err));
	};
	const saveImage = response => {
		setImageSelected(response.data.url);
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

			<input
				type="file"
				onChange={event => {
					setImageSelected(event.target.files[0]);
				}}
			/>
			<button type="submit" onClick={uploadImage}>
				Upload Image
			</button>

			<Image src={imageSelected} alt="garden" />
		</Layout>
	);
};

export default Page;
