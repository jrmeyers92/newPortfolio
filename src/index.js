import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: "#659dbd",
		},
		secondary: {
			// This is green.A700 as hex.
			main: "#11cb5f",
		},
	},
});

ReactDOM.render(
	<Router>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Router>,
	document.getElementById("root")
);
