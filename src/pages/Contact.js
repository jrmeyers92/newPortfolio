import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(() => ({
	grid: {
		minHeight: "83vh",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "Center",
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
	},
	textArea: {
		marginTop: "1rem",
		marginBlock: "1rem",
		width: "100%",
	},
	textInput: {
		width: "100%",
	},
}));

const Contact = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid className={classes.grid} container>
				<Grid
					item
					xs={12}
					sm={9}
					md={6}
					component={Paper}
					elevation={4}
					className={classes.paper}>
					<Typography variant='h5' align='center'>
						Let's get in touch!
					</Typography>
					<form
						className={classes.form}
						name='contactJake'
						method='post'
						data-netlify='true'>
						<input type='hidden' name='contactJake' value='contactJake' />
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
				</Grid>
			</Grid>
		</div>
	);
};

export default Contact;
