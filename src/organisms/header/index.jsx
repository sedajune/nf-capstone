import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../ions/images/logo.png";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	alignItems: "flex-start",
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(2),
	// Override media queries injected by theme.mixins.toolbar
	"@media all": {
		maxHeight: 100,
	},
}));

const ButtonLogin = styled(Button)({
	border: "none",
	boxShadow: "none",
	fontSize: "10px",
	background: "none",
});

const Header = () => {
	const { data: session } = useSession();
	console.log(session);
	return (
		<Box sx={{ flexGrow: 1, mb: "0.5rem" }}>
			<AppBar position="static">
				<StyledToolbar>
					<Image src={logo} alt="logo plant buddy" />
					<Typography
						variant="h4"
						noWrap
						component="div"
						sx={{ flexGrow: 1, alignSelf: "center" }}
					>
						lant Buddy
					</Typography>
					{session ? (
						<div>
							<Avatar
								src={session.user.image}
								alt={session.user.name}
								sx={{ m: "auto", mt: "10px" }}
							/>
							<ButtonLogin onClick={() => signOut()}>Logout</ButtonLogin>
						</div>
					) : (
						<ButtonLogin onClick={() => signIn("github")}>Sign in</ButtonLogin>
					)}
				</StyledToolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
