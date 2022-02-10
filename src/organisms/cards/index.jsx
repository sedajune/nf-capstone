import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandMore from "./styled";
import Image from "next/image";
import Button from "@mui/material/Button";
import FavoriteButton from "../../atoms/checkbox";

const PlantCard = ({
	description,
	contactInfo,
	soilQuality,
	size,
	location,
	number,
	spaceType,
	tellMeMore,
	bookmarked,
	index,
	...rest
}) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ maxWidth: 345, mx: "auto" }}>
			<FavoriteButton index={index} bookmarked={bookmarked} />
			<CardHeader title={description} />

			<Image
				src="https://images.unsplash.com/photo-1584479898061-15742e14f50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
				alt="seedlings"
				width="150vw"
				height="150vw"
				quality="100"
			/>

			<CardContent>
				<Typography>Soil quality: {soilQuality}</Typography>
				<Typography>Location: {location}</Typography>
				<Typography>Size of the space: {size}</Typography>
				<Typography>Number of possible plant buddies: {number}</Typography>
				<Typography>Type of space: {spaceType}</Typography>
				<Typography>Contact me: {contactInfo}</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<Button size="small">Tell me More</Button> <ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography>{tellMeMore}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default PlantCard;
