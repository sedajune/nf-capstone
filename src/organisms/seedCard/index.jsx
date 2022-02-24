import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";

const CardLabel = ({ children }) => (
	<Box component="span" sx={theme => ({ color: theme.palette.primary.main })}>
		{children}
	</Box>
);

const SeedCard = ({
	seedName,
	images = [],
	contactInfo,
	seedDetails,
	zipCode,
	type,
	index,
	...rest
}) => {
	return (
		<div>
			<Card sx={{ maxWidth: 345, mx: "auto", mb: 5 }}>
				<CardHeader title={seedName} />
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
					<Typography>
						<CardLabel>Type:</CardLabel> {type}
					</Typography>
					<Typography>
						<CardLabel>Information about this plant: </CardLabel>
						{seedDetails}
					</Typography>
					<Typography>
						<CardLabel>My location:</CardLabel> {zipCode}
					</Typography>
					<Typography>
						<CardLabel>Contact me:</CardLabel> {contactInfo}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default SeedCard;
