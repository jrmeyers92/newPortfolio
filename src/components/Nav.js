import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: 0,
		padding: 0,
	},
	appBar: {
		margin: 0,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		color: "white",
		[theme.breakpoints.down("sm")]: {
			flexGrow: 1,
		},
	},
	headerOptions: {
		marginLeft: "2rem",
		display: "flex",
		width: "100%",
		flexGrow: 1,
		justifyContent: "space-evenly",
	},
	button: {
		color: "white",
	},
}));

const Nav = (props) => {
	const { history } = props;
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = (pageURL) => {
		history.push(pageURL);
		setAnchorEl(null);
	};

	const handleButtonClick = (pageURL) => {
		history.push(pageURL);
	};

	const menuItems = [
		{
			menuTitle: "Projects",
			pageURL: "/",
		},
		{
			menuTitle: "About Me",
			pageURL: "/aboutskills",
		},
		{
			menuTitle: "Contact",
			pageURL: "/contact",
		},
	];

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.appBar}>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Jake Meyers
					</Typography>
					<div>
						{isMobile ? (
							<>
								<IconButton
									edge='start'
									className={classes.menuButton}
									color='inherit'
									aria-label='menu'
									onClick={handleMenu}>
									<MenuIcon />
								</IconButton>
								<Menu
									id='menu-appbar'
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={open}
									onClose={() => setAnchorEl(null)}>
									{menuItems.map((menuItem) => {
										return (
											<MenuItem
												onClick={() => handleMenuClick(menuItem.pageURL)}>
												{menuItem.menuTitle}
											</MenuItem>
										);
									})}
								</Menu>
							</>
						) : (
							<div className={classes.headerOptions}>
								{menuItems.map((menuItem) => {
									return (
										<Button
											className={classes.button}
											onClick={() => handleButtonClick(menuItem.pageURL)}>
											{menuItem.menuTitle}
										</Button>
									);
								})}
							</div>
						)}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default withRouter(Nav);
