import React from "react";
import {
	Typography,
	CardMedia,
	CardContent,
	CardActions,
	Button,
	CardActionArea,
	Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RaftingPicture from "./RaftingCompany.jpg";

const useStyles = makeStyles(() => ({
	root: {
		minWidth: 200,
		height: 420,
	},
	media: {
		height: 0,
		paddingTop: "56.25%",
	},
	anchor: {
		textDecoration: "none",
	},
}));

const Cards = ({ title, description, website, github, pic }) => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={pic}
					title='image'></CardMedia>

				<CardContent>
					<Typography variant='h5'>{title}</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' color='primary'>
						<a
							href={website}
							target='_blank'
							rel='noreferrer'
							className={classes.anchor}>
							Website
						</a>
					</Button>
					<Button size='small' color='primary'>
						<a
							href={github}
							target='_blank'
							rel='noreferrer'
							className={classes.anchor}
							color='primary'>
							GitHub
						</a>
					</Button>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

export default Cards;
