import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../ions/images/logo.png";
import Image from "next/image";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	alignItems: "flex-start",
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(2),
	// Override media queries injected by theme.mixins.toolbar
	"@media all": {
		minHeight: 128,
	},
}));

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1, mb: "1.5rem" }}>
			<AppBar position="static">
				<StyledToolbar>
					<Image src={logo} alt="logo plant buddy" />
					<Typography
						variant="h3"
						noWrap
						component="div"
						sx={{ flexGrow: 1, alignSelf: "center" }}
					>
						lant Buddy
					</Typography>
				</StyledToolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
