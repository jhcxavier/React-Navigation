import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar2 from "../component/navBar2";
import Page1 from "../component/page1";
import Page2 from "../component/page2";
import Page3 from "../component/page3";

const Dashboard = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column">
			{/* <BrowserRouter basename={basename}> */}
			<Navbar2 />
			{/* 
			<Switch>
				<Route path="/page1">
					<Page1 />
				</Route>
			</Switch> */}
			{/* </BrowserRouter> */}
		</div>
	);
};

export default Dashboard;
