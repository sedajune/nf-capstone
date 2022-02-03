import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ModeIcon from "@mui/icons-material/Mode";
import Paper from "@mui/material/Paper";
//import StyledIcons from "./atoms/icons/styled";

const Footer = () => {
	const [value, setValue] = React.useState(0);

	return (
		<footer>
			<Box sx={{ width: 500 }}>
				<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
					<BottomNavigation
						showLabels
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					>
						<BottomNavigationAction icon={<CottageRoundedIcon />} />
						<BottomNavigationAction icon={<EmojiNatureIcon />} />
						<BottomNavigationAction icon={<EmojiObjectsIcon />} />
						<BottomNavigationAction icon={<ModeIcon />} />
					</BottomNavigation>
				</Paper>
			</Box>
		</footer>
	);
};

export default Footer;
