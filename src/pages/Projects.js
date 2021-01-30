import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "../components/Cards";

const useStyles = makeStyles(() => ({
	projects: {
		height: "100vh",
		width: "100%",
		background: "#F0F0F0",
	},

	gridContainer: {
		paddingLeft: "30px",
		paddingRight: "30px",
		display: "flex",
		justifyContent: "stretch",
		alignItems: "stretch",
	},
	Typography: {
		paddingTop: "2rem",
		marginBottom: "2rem",
	},
}));

const Projects = () => {
	const classes = useStyles();

	return (
		<div className={classes.projects}>
			<Typography variant='h5' align='center' className={classes.Typography}>
				My Projects{" "}
			</Typography>

			<Grid container spacing={4} className={classes.gridContainer}>
				<Grid item xs={12} sm={6} md={4}>
					<Cards
						title='CocktailDB App'
						description='Used React, React Router, and the Cocktail DB to create an App that
						allows you to search for cocktails, view ingredients and recipes,
						and save items to a favorites list.'
						website='https://reactcocktailapp.netlify.app'
						github='https://github.com/jrmeyers92/react-cocktail-app'
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Cards
						title='Doubleshot Cafe'
						description='Used React, React Router, Framer Motion and custom CSS to create a 4 page website for a cafe'
						website='https://doubleshotcafe.netlify.app'
						github='https://github.com/jrmeyers92/doubleshotCafe'
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Cards
						title='Colorado Rafting Co.'
						description='Used HTML, Sass, and Vanilla JavaScript to creat a landing page for a local Colorado rafting company.'
						website='https://raftingcompany.netlify.app'
						github='https://github.com/jrmeyers92/RaftingCompany'
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Projects;
