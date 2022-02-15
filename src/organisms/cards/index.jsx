import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandMore from "./styled";
import ImageUpload from "../image-upload";
import FavoriteButton from "../../atoms/checkbox";

const PlantCard = ({
	description,
	uploadedImage,
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
		<Card sx={{ maxWidth: 345, mx: "auto", mb: 5 }}>
			<FavoriteButton index={index} bookmarked={bookmarked} />
			<CardHeader title={description} />

			<ImageUpload
				src={uploadedImage}
				alt="picture plants"
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
					<Typography>Tell Me More</Typography>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse sx={{ mb: 10 }} in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography>{tellMeMore}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default PlantCard;
