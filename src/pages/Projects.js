import { Container, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	Typography: {
		marginTop: "2rem",
	},
}));

const Projects = () => {
	const classes = useStyles();

	const projects = [
		{
			title: "Rafting Landing Page",
			github: "https://github.com/jrmeyers92/RaftingCompany",
			url: "https://raftingcompany.netlify.app",
		},
	];

	return (
		<div>
			<Typography variant='h5' align='center' className={classes.Typography}>
				My Projects{" "}
			</Typography>
			<Container>
				
			</Container>
		</div>
	);
};

export default Projects;
