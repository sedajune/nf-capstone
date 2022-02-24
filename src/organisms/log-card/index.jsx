import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const LogCard = ({ date, plantName, images = [], logNotes, index, ...rest }) => {
	return (
		<div>
			<Card sx={{ maxWidth: 345, mx: "auto", mb: 5 }}>
				<CardHeader title={plantName} />
				{images.map(image => {
					return (
						<Image
							key={image}
							src={image}
							alt="picture seeds"
							width={150}
							height={150}
							quality="100"
						/>
					);
				})}
				<CardContent>
					<Typography>Date: {date}</Typography>
					<Typography>Notes: {logNotes}</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default LogCard;
