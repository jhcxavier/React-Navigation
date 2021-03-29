import React from "react";
import { useHistory } from "react-router-dom";

const Navbar2 = () => {
	const history = useHistory();
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" onClick={() => history.push("/page1")}>
								Page 1
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" onClick={() => history.push("/page2")}>
								Page 2
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="#"
								tabIndex="-1"
								aria-disabled="true"
								onClick={() => history.push("/page3")}>
								Page 3
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar2;
