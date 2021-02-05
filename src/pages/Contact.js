import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(() => ({
	grid: {
		height: "100%",
	},
	paper: {
		padding: "2rem",
		display: "flex",
		flexDirection: "column",
		marginLeft: "auto",
		marginRight: "auto",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "50vw",
	},
	textArea: {
		marginTop: "1rem",
		marginBlock: "1rem",
		width: "50%",
	},
	textInput: {
		width: "50%",
	},
}));

const Contact = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid
				xs={12}
				sm={9}
				md={6}
				lg={12}
				className={classes.grid}
				container
				justify='center'
				alignItems='center'>
				<Paper elevation={4} className={classes.paper}>
					<Typography variant='h5' align='center'>
						Contact Me
					</Typography>
					<form
						className={classes.form}
						name='contactPortfolio'
						method='POST'
						data-netlify='true'>
						<TextField
							label='Name'
							required
							name='name'
							className={classes.textInput}></TextField>
						<TextField
							label='Email'
							required
							name='email'
							className={classes.textInput}></TextField>
						<TextareaAutosize
							className={classes.textArea}
							aria-label='minimum height'
							rowsMin={4}
							name='message'
							placeholder='Enter Message'></TextareaAutosize>

						<Button type='submit' variant='outlined' color='primary'>
							Submit
						</Button>
					
			

					</form>
				</Paper>
			</Grid>
		</div>
	);
};

export default Contact;
