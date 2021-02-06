import React from "react";
import profilePic from "../profilephoto.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import "./AboutSkills.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
		width: "100%",
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
		marginTop: "-2rem",
		display: "Flex",
		alignItems: "center",
	},
	rightArrow: {
		cursor: "pointer",
	},
	leftArrow: {
		cursor: "pointer",
	},
}));

const AboutSkills = () => {
	const classes = useStyles();
	const slider = document.querySelector(".slider");

	let sectionIndex = 0;

	const rightClick = () => {
		sectionIndex = sectionIndex > 4 ? (sectionIndex = 0) : (sectionIndex += 1);
		// slider.style.transform = "translate(" + sectionIndex * "-25" + "%";
		slider.style.transform = `translate(${sectionIndex * -15}% )`;
	};

	const leftClick = () => {
		sectionIndex = sectionIndex > 0 ? (sectionIndex -= 1) : (sectionIndex = 5);
		// slider.style.transform = "translate(" + sectionIndex * "-25" + "%";
		slider.style.transform = `translate(${sectionIndex * -15}% )`;
	};

	return (
		<div className={classes.AboutSkills}>
			<img src={profilePic} alt='photo of me' className={classes.photo} />
			<Grid className={classes.content} container>
				<Grid
					className={classes.about}
					item
					xs={12}
					sm={8}
					md={6}
					justify='center'
					alignItems='center'>
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
				</Grid>
				<Grid className={classes.skills} item>
					<ChevronLeftIcon
						fontSize='large'
						className={classes.leftArrow}
						class='leftArrow'
						onClick={leftClick}
					/>
					<div className='carousel'>
						<div className='slider'>
							<i class='fab fa-html5'></i>
							<i class='fab fa-css3-alt'></i>
							<i class='fab fa-js-square'></i>
							<i class='fab fa-sass'></i>
							<i class='fab fa-react'></i>
							<i class='fab fa-git'></i>
						</div>
					</div>
					<ChevronRightIcon
						fontSize='large'
						className={classes.rightArrow}
						class='rightArrow'
						onClick={rightClick}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutSkills;
