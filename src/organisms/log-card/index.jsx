import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ImageUpload from "../image-upload";

const LogCard = ({ date, plantName, uploadedImage, logNotes, index, ...rest }) => {
	return (
		<div>
			<Card sx={{ maxWidth: 345, mx: "auto", mb: 5 }}>
				<CardHeader title={plantName} />
				<img
					src={uploadedImage}
					alt="picture seed/seedling"
					width="150vw"
					height="150vw"
					quality="100"
				/>
				<CardContent>
					<Typography>Date: {date}</Typography>
					<Typography>Notes: {logNotes}</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default LogCard;
