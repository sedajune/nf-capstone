import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
	const [value, setValue] = React.useState(0);

	return (
		<footer>
			<Box sx={{ width: 500 }}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction icon={<RestoreIcon />} />
					<BottomNavigationAction icon={<FavoriteIcon />} />
					<BottomNavigationAction icon={<LocationOnIcon />} />
					<BottomNavigationAction icon={<LocationOnIcon />} />
				</BottomNavigation>
			</Box>
		</footer>
	);
};

export default Footer;
