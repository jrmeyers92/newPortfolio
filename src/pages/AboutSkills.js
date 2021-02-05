import React from "react";
import profilePic from "../profilephoto.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "./AboutSkills.css";

const useStyles = makeStyles((theme) => ({
	AboutSkills: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	photo: {
		borderRadius: "50%",
		marginTop: 20,
		height: 200,
	},
	content: {
		margin: "0 3rem",
		display: "flex",
		alignItems: "center",
	},
	about: {
		margin: "2rem",
		fontSize: 17,
		lineHeight: 1.2,
		fontFamily: "roboto",
	},
	skills: {
		margin: "2rem",
		display: "flex",
	},
}));

const AboutSkills = () => {
	const classes = useStyles();
	return (
		<div className={classes.AboutSkills}>
			<img src={profilePic} alt='photo of me' className={classes.photo} />
			<div className={classes.content}>
				<div className={classes.about}>
					<Typography variant='body1'>
						Hello! I'm a Web Developer specalizing in the front-end. I have
						strong HTML, CSS, and JavaScript Skills. On top of the basic
						technologies, I have experience using React (plus common libraries
						used in conjunction), Sass, and Git.
					</Typography>
					<br></br>
					<Typography variant='body1'>
						In my free time, I'm activily learning new skills and honing the
						ones I already have. My top list of technologies to learn include,
						Node.js, VIM, Web Scraping, but am open to learn any your company is
						using!
					</Typography>
				</div>
				<div className={classes.skills}>
					<i class='fab fa-html5'></i>
					<i class='fab fa-css3-alt'></i>
					<i class='fab fa-js-square'></i>
					<i class='fab fa-sass'></i>
					<i class='fab fa-react'></i>
					<i class='fab fa-git'></i>
				</div>
			</div>
		</div>
	);
};

export default AboutSkills;
