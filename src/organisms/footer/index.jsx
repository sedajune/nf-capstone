import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import SpaIcon from "@mui/icons-material/Spa";
import ModeIcon from "@mui/icons-material/Mode";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";

const Footer = () => {
	const [value, setValue] = React.useState(0);
	const router = useRouter();

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
						<BottomNavigationAction
							icon={<CottageRoundedIcon />}
							onClick={() => {
								router.push("/main");
							}}
						/>
						<BottomNavigationAction
							icon={<SpaIcon />}
							onClick={() => {
								router.push("/bookmarks");
							}}
						/>

						<BottomNavigationAction
							icon={<ModeIcon />}
							onClick={() => {
								router.push("/form");
							}}
						/>
					</BottomNavigation>
				</Paper>
			</Box>
		</footer>
	);
};

export default Footer;
