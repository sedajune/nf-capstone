import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandMore from "./styled";

const PlantCard = ({
	description,
	contactInfo,
	soilQuality,
	size,
	location,
	number,
	spaceType,
	...rest
}) => {
	const [expanded, setExpanded] = React.useState(false);
	console.log(rest);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader title={description} subheader="February 22nd, 2022" />
			<CardMedia
				component="img"
				height="194"
				image="./public/plantCardExample.jpg"
				alt="garden"
			/>
			<CardContent>
				<Typography>{soilQuality}</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography variant="body1">Method:</Typography>
					<Typography variant="body1">Lorem ipsum</Typography>
					<Typography component="body1">Bliblablu</Typography>
					<Typography component="body2">Foo Yoo Coo</Typography>
					<Typography>Mimamu</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default PlantCard;
