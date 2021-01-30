import {
	Card,
	Container,
	Typography,
	CardMedia,
	CardContent,
	Grid,
	CardActions,
	Button,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	Typography: {
		marginTop: "2rem",
	},
	card: {
		height: "100%",
	},
	media: {
		height: 140,
	},
}));

const Projects = (props) => {
	const classes = useStyles();

	// const projects = [
	// 	{
	// 		title: "Rafting Landing Page",
	// 		github: "https://github.com/jrmeyers92/RaftingCompany",
	// 		url: "https://raftingcompany.netlify.app",
	// 	},
	// ];

	return (
		<div>
			<Typography variant='h5' align='center' className={classes.Typography}>
				My Projects{" "}
			</Typography>
			<Container>
				<Grid container spacing={3} alignItems='stetch'>
					<Grid item xs className={classes.card}>
						<Card>
							<CardMedia
								className={classes.media}
								image='./RaftingCompany.jpg'
								component='img'></CardMedia>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									Cocktail DB App
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									Used React, React Router, and the Cocktail DB to create an App
									that allows you to search for cocktails, view ingredients and
									recipes, and save items to a favorites list.
								</Typography>
							</CardContent>
							<CardActions>
								<Button size='small' color='primary'>
									Website
								</Button>
								<Button size='small' color='primary'>
									GitHub
								</Button>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs className={classes.card}>
						<Card>
							<CardMedia
								className={classes.media}
								image='./RaftingCompany.jpg'
								component='img'></CardMedia>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									Doubleshot Cafe
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									Created a 4 page website for a cafe using React, React Router,
									Framer Motion and custom CSS.
								</Typography>
							</CardContent>
							<CardActions>
								<Button size='small' color='primary'>
									Website
								</Button>
								<Button size='small' color='primary'>
									GitHub
								</Button>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs className={classes.card}>
						<Card>
							<CardMedia
								className={classes.media}
								image='./RaftingCompany.jpg'
								component='img'></CardMedia>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									Colorado Rafting Co.
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									Used HTML, Sass, and Vanilla JavaScript to create a landing
									page for a Colorado Rafting Company.
								</Typography>
							</CardContent>
							<CardActions>
								<Button size='small' color='primary'>
									Website
								</Button>
								<Button size='small' color='primary'>
									GitHub
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Projects;
