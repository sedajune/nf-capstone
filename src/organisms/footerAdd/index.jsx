import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import SpaIcon from "@mui/icons-material/Spa";
import Paper from "@mui/material/Paper";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import { useRouter } from "next/router";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import BrushIcon from "@mui/icons-material/Brush";

const StyledFab = styled(Fab)({
	position: "absolute",
	zIndex: 1,
	top: -30,
	left: 0,
	right: 0,
	margin: "0 auto",
});

const FooterAdd = () => {
	const [value, setValue] = React.useState(0);
	const router = useRouter();

	return (
		<footer>
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
						<StyledFab
							color="secondary"
							onClick={() => {
								router.push("/plant-form");
							}}
						>
							<AddIcon />
						</StyledFab>
						<BottomNavigationAction
							icon={<EmojiNatureIcon />}
							onClick={() => {
								router.push("/seed-exchange");
							}}
						/>
						<BottomNavigationAction
							icon={<BrushIcon />}
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

export default FooterAdd;
