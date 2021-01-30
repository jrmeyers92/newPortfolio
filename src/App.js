import React from "react";
import Nav from "./components/Nav";
import AboutSkills from "./pages/AboutSkills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
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
			<Footer />
		</div>
	);
}

export default App;
