import React from "react";
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
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";

//import Map from "../../molecules/map";

const CardLabel = ({ children }) => (
	<Box component="span" sx={theme => ({ color: theme.palette.primary.main })}>
		{children}
	</Box>
);

const PlantCard = ({
	description,
	contactInfo,
	images = [],
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

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div>
			<Card sx={{ maxWidth: 345, mx: "auto", mb: 5 }}>
				<FavoriteButton index={index} bookmarked={bookmarked} />
				<CardHeader title={description} />
				<Box sx={{ ml: "90px" }}>
					<Carousel>
						{images.map(image => {
							return (
								<Image
									key={image}
									src={image}
									alt="picture plants"
									width={150}
									height={150}
									quality="100"
								/>
							);
						})}
					</Carousel>
				</Box>
				<CardContent>
					<Typography>
						<CardLabel>Location:</CardLabel> {location}
					</Typography>
					<Typography>
						<CardLabel>Zip Code: </CardLabel>
						{zipCode}
					</Typography>

					<Typography>
						<CardLabel>Number of possible plant buddies:</CardLabel> {number}
					</Typography>
					<Typography>
						<CardLabel>Size of the space: </CardLabel>
						{size}
					</Typography>
					<Typography>
						<CardLabel>Type of space: </CardLabel>
						{spaceType}
					</Typography>
					<Typography>
						<CardLabel>Soil quality:</CardLabel> {soilQuality}
					</Typography>
					<Typography>
						<CardLabel>Contact me:</CardLabel> {contactInfo}
					</Typography>
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
