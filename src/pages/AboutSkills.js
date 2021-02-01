import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Picture from "../profilephoto.jpeg";

const useStyles = makeStyles(() => ({
	Header: {
		paddingTop: "2rem",
		marginBottom: "4rem",
	},
	pic: {
		borderRadius: 200,
		width: 250,
		marginLeft: "auto",
		marginRight: "auto",
		padding: "1rem",
		marginTop: "1rem",
	},
}));

const AboutSkills = () => {
	const classes = useStyles();
	return (
		<div>
			<Typography variant='h5' align='center' className={classes.Header}>
				About Me
			</Typography>
			<Grid
				container
				spacing={4}
				style={{ paddingLeft: "50px", paddingRight: "50px" }}>
				<Grid item container sm={12} md={4}>
					<img src={Picture} className={classes.pic} alt='Jake Meyers' />
					<Typography
						variant='subtitle1'
						component='h6'
						style={{ display: "block" }}>
						About
					</Typography>
					<Typography variant='body2' component='p'>
						Hello! I'm a Web Developer specalizing in the Front End. I have
						experience using HTML5, CSS3, JavaScript, React and more. I'm
						constantly learning new skills and further honing the ones I have.
					</Typography>
				</Grid>

				<Grid item container sm={12} md={1}>
					<Typography variant='subtitle1' component='h6'>
						Technologies
					</Typography>
					<Grid style={{ display: "flex" }}>
						<i
							class='fab fa-html5'
							style={{
								fontSize: "50px",
								color: " #e34c26",
								padding: "20px",
								paddingLeft: 0,
							}}></i>

						<i
							class='fab fa-sass'
							style={{
								fontSize: "50px",
								color: "#cc6699 ",
								padding: "20px",
							}}></i>
						<i
							class='fab fa-js-square'
							style={{
								fontSize: "50px",
								color: "#f0db4f",
								padding: "20px",
							}}></i>

						<i
							class='fab fa-react'
							style={{
								fontSize: "50px",
								color: "#61DBFB",
								padding: "20px",
							}}></i>
						<i
							class='fab fa-git'
							style={{ fontSize: "50px", padding: "20px" }}></i>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutSkills;
