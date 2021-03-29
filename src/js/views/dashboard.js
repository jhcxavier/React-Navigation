import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar2 from "../component/navBar2";

const Dashboard = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar2 />
				<Switch>
					<Route exact path="/page1" />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Dashboard;
