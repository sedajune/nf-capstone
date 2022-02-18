import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ImageUpload from "../image-upload";
import styled from "@emotion/styled";

const SeeCard = styled.div`
	border: 4px solid #e4eaeb;
	background-color: #ffffe3;
`;

const SeedCard = ({
	seedName,
	uploadedImage,
	contactInfo,
	seedDetails,
	zipCode,
	type,
	index,
	...rest
}) => {
	return (
		<div>
			<SeeCard sx={{ maxWidth: 345, mx: "auto", mb: 5 }}>
				<CardHeader title={seedName} />

				<ImageUpload
					src={uploadedImage}
					alt="picture plants"
					width="150vw"
					height="150vw"
					quality="100"
				/>

				<CardContent>
					<Typography>Type: {type}</Typography>
					<Typography>Information about this plant: {seedDetails}</Typography>
					<Typography>My location: {zipCode}</Typography>
					<Typography>Contact me: {contactInfo}</Typography>
				</CardContent>
			</SeeCard>
		</div>
	);
};

export default SeedCard;
