import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import SpaIcon from "@mui/icons-material/Spa";
import Paper from "@mui/material/Paper";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import { useRouter } from "next/router";
import BrushIcon from "@mui/icons-material/Brush";
import Toolbar from "@mui/material/Toolbar";

const Footer = () => {
	const [value, setValue] = React.useState(0);
	const router = useRouter();

	return (
		<footer>
			<Toolbar />
			<Box sx={{ width: 500 }}>
				<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
					<BottomNavigation
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					>
						<BottomNavigationAction
							icon={<CottageRoundedIcon />}
							aria-label="home icon"
							onClick={() => {
								router.push("/main");
							}}
						/>
						<BottomNavigationAction
							icon={<SpaIcon />}
							aria-label="bookmark icon"
							onClick={() => {
								router.push("/bookmarks");
							}}
						/>

						<BottomNavigationAction
							icon={<EmojiNatureIcon />}
							aria-label="nature icon"
							onClick={() => {
								router.push("/seed-exchange");
							}}
						/>
						<BottomNavigationAction
							icon={<BrushIcon />}
							aria-label="brush icon"
							onClick={() => {
								router.push("/diy-ideas");
							}}
						/>
					</BottomNavigation>
				</Paper>
			</Box>
		</footer>
	);
};

export default Footer;
