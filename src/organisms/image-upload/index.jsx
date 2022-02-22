import React, { useState } from "react";
import axios from "axios";
import { Input } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import useStore from "../../ions/hooks/storeFormData";
import Button from "@mui/material/Button";

const CLOUDNAME = process.env.NEXT_PUBLIC_CLOUDNAME;
const PRESET = process.env.NEXT_PUBLIC_PRESET;

const ImageUpload = () => {
	const [imageSelected, setImageSelected] = useState([]);
	const [localImage, setLocalImage] = useState("");

	const setImages = useStore(state => state.setImages);

	const setPlantCard = useStore(state => state.setPlantCard);

	const Image = styled.img`
		max-width: 40%;
		max-height: 40%;
		border: 4px solid #e4eaeb;
	`;

	const upload = async () => {
		const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

		const files = Array.from(imageSelected);

		console.log(imageSelected);

		const imageResponses = await Promise.all(
			files.map(image => {
				const formData = new FormData();
				formData.append("file", image);
				formData.append("upload_preset", PRESET);

				return axios.post(url, formData);
			})
		);
		const uploadedImages = imageResponses.map(response => {
			return response.data.url;
		});
		setImages(uploadedImages);
		setLocalImage(uploadedImages);
		setPlantCard(uploadedImages);
	};

	return (
		<Box component="span" sx={{ p: 2 }}>
			<div>
				{" "}
				<Image src={localImage}></Image>
				<input
					accept="image/*"
					// style={{ display: "none" }}
					type="file"
					onChange={event => {
						setImageSelected(event.target.files);
					}}
				/>
				<IconButton
					color="primary"
					aria-label="upload picture"
					component="span"
					onClick={upload}
				>
					<PhotoCamera />
				</IconButton>
			</div>
		</Box>
	);
};

export default ImageUpload;
