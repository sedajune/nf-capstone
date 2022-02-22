import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandMore from "./styled";
import FavoriteButton from "../../atoms/checkbox";
import Image from "next/image";
import useStore from "../../ions/hooks/storeFormData";
//import Map from "../../molecules/map";

const PlantCard = ({
	description,
	contactInfo,
	soilQuality,
	size,
	location,
	zipCode,
	number,
	spaceType,
	tellMeMore,
	bookmarked,
	index,
	...rest
}) => {
	const [expanded, setExpanded] = React.useState(false);
	// const [images, setImages] = useState([]);
	// const getImages = useStore(state => state.getImages);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div>
			<Card sx={{ maxWidth: 345, mx: "auto", mb: 5 }}>
				<FavoriteButton index={index} bookmarked={bookmarked} />
				<CardHeader title={description} />

				{/* <Image
					src={}
					alt="picture plants"
					width={150}
					height={150}
					quality="100"
				/> */}

				<CardContent>
					<Typography>Soil quality: {soilQuality}</Typography>
					<Typography>Location: {location}</Typography>
					<Typography>Zip Code: {zipCode}</Typography>

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
		</div>
	);
};

export default PlantCard;
