import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton, Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
	root: {
		backgroundColor: "#3f51b5",
		height: "10vh",
		width: "100vw",
		position: "fixed",
		bottom: 0,
		color: "white",
	},
	gridItem: {
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 30,
		marginTop: "1.5vh",
	},
	gridItem2: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "Center",
		marginTop: "1.75vh",
	},
	iconButton: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
});

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item className={classes.gridItem} xs={6}>
					<IconButton className={classes.iconButton} color='inherit'>
						<LinkedInIcon fontSize='large' />
					</IconButton>
					<IconButton color='inherit'>
						<GitHubIcon fontSize='large' />
					</IconButton>
					<IconButton color='inherit'>
						<TwitterIcon fontSize='large' />
					</IconButton>
				</Grid>
				<Grid item className={classes.gridItem2}>
					<Typography>
						<strong>Phone: </strong> 417-403-1570
					</Typography>
					<Typography>
						<strong>Email: </strong> JakeRMeyers92@Gmail.com
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default Footer;
