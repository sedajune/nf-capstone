import React, { useState } from "react";
import axios from "axios";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const CLOUDNAME = process.env.NEXT_PUBLIC_CLOUDNAME;
const PRESET = process.env.NEXT_PUBLIC_PRESET;

const Image = styled.img`
	max-width: 40%;
	max-height: 40%;
	border: 4px solid #e4eaeb;
`;

const ImageUpload = ({ onUpload }) => {
	const [imageSelected, setImageSelected] = useState([]);
	const [localImage, setLocalImage] = useState([]);

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
		onUpload(uploadedImages);
		setLocalImage(uploadedImages);
	};

	return (
		<Box component="span" sx={{ p: 2 }}>
			<div>
				{localImage.map(image => (
					<Image src={image} />
				))}
				<input
					accept="image/*"
					multiple
					// style={{ display: "none" }}
					type="file"
					onChange={event => {
						setImageSelected(event.target.files);
					}}
				/>
				<Button
					color="primary"
					aria-label="upload picture"
					component="span"
					onClick={upload}
				>
					<PhotoCamera />
				</Button>
			</div>
		</Box>
	);
};

export default ImageUpload;
