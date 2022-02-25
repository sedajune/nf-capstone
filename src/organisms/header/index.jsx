import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../ions/images/logo.png";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRouter } from "next/router";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
	const [anchorEl, setAnchorEl] = React.useState(null);
	const router = useRouter();
	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem
				onClick={() => {
					router.push("/my-account");
				}}
			>
				<AccountCircleIcon />
				My Account
			</MenuItem>
			<MenuItem
				onClick={() => {
					router.push("/plant-log");
				}}
			>
				<CreateIcon />
				My Plant Log
			</MenuItem>
			<MenuItem onClick={() => signOut()}>
				<GitHubIcon />
				Logout
			</MenuItem>
		</Menu>
	);

	const { data: session } = useSession();

	return (
		<Box sx={{ flexGrow: 1, mb: "0.5rem" }}>
			<AppBar position="static">
				<StyledToolbar>
					<img src={logo.src} alt="logo plant buddy" />
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
						</div>
					) : (
						<ButtonLogin aria-label="Login" onClick={() => signIn("github")}>
							<GitHubIcon />
						</ButtonLogin>
					)}
					<IconButton
						size="large"
						aria-label="display more actions"
						edge="end"
						aria-controls={menuId}
						onClick={handleProfileMenuOpen}
						color="inherit"
					>
						<MoreIcon />
					</IconButton>
				</StyledToolbar>
			</AppBar>
			{renderMenu}
		</Box>
	);
};

export default Header;
