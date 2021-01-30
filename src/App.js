import React from "react";
import Nav from "./components/Nav";
import AboutSkills from "./pages/AboutSkills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";

function App() {
	const useStyles = makeStyles({
		app: {
			margin: 0,
			padding: 0,
		},
	});
	const classes = useStyles();

	return (
		<div className={classes.app}>
			<Nav className={classes.app} />
			<Switch>
				<Route from='/' exact></Route>

				<Route path='/projects'>
					<Projects />
				</Route>
				<Route path='/aboutskills'>
					<AboutSkills />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
