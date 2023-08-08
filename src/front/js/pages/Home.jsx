import React from "react";
import { Link } from "react-router-dom";
import back0 from "../../img/star-wars-back0.jpg";
// import back1 from "../../img/star-wars-back1.jpg";
// import back2 from "../../img/star-wars-back2.jpg";

export const Home = () => (
	<div className="container-fluid text-center my-5 bg-dark">
		<div className="cover-container d-flex w-75 p-4 mx-auto flex-column">
			<img className="d-block w-100" src={back0} alt="Star Wars timeline"/>
		</div>
	</div>
);
