/* Comentario */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/Home.jsx";
import { Characters } from "./pages/Characters.jsx";
import { CharactersDetails } from "./pages/CharactersDetails.jsx";
import { Planets } from "./pages/Planets.jsx";
import { PlanetsDetails } from "./pages/PlanetsDetails.jsx";
import { Starships } from "./pages/Starships.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";

// people: https://starwars-visualguide.com/assets/img/characters/1.jpg
// host = "https://starwars-visualguide.com/assets/img/"
// category = { "people": "characters" }
// id = #
// ext = ".jpg"

// create your first component
const Layout = () => {
	// the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						{/* 
						<Route path="/characters" element={<Characters />} />
						<Route path="/characters/:theid" element={<CharactersDetails />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:theid" element={<PlanetsDetails />} /> 
						*/}
						<Route path="/starships/" element={<Starships />} />
						<Route path="*" element={<h1 style={{ color: "white" }}>404 - Page not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
