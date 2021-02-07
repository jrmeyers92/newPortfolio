import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
	root: {
		backgroundColor: "#3f51b5",
		height: "10vh",
		width: "100vw",

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
	anchor: {
		color: "white",
	},
});

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item className={classes.gridItem} xs={12}>
					<IconButton className={classes.iconButton} color='inherit'>
						<a
							href='www.linkedin.com/in/jake-meyers-477b7a52'
							target='_blank'
							className={classes.anchor}>
							<LinkedInIcon fontSize='large' />
						</a>
					</IconButton>
					<IconButton color='inherit'>
						<a
							href='https://github.com/jrmeyers92'
							target='_blank'
							rel='noreferrer'
							className={classes.anchor}>
							<GitHubIcon fontSize='large' />
						</a>
					</IconButton>
					<IconButton color='inherit'>
						<a
							href='https://twitter.com/jakemeyers92'
							color='inherit'
							target='_blank'
							rel='noreferrer'
							className={classes.anchor}>
							<TwitterIcon fontSize='large' />
						</a>
					</IconButton>
				</Grid>
			</Grid>
		</div>
	);
};

export default Footer;
