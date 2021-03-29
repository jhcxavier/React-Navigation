import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Login</h1>
		<input placeholder="email" />
		<br />
		<input placeholder="password" className="mt-1" />
		<br />
		<Link to="/dashboard">
			<button className="btn btn-success mt-2">Submit</button>
		</Link>
	</div>
);
