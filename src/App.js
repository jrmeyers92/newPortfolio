import React from "react";
import Nav from "./components/Nav";
import AboutSkills from "./pages/AboutSkills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
	const useStyles = makeStyles({
		app: {
			height: "200vh",
			margin: 0,
		},
	});
	const classes = useStyles();

	return (
		<div className={classes.app}>
			<Nav />
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
