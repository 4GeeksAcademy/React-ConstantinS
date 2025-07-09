import React from "react";

//include images into your bundle
import { NavBar } from "./Piezas/NavBar";
import { UpperTab } from "./Piezas/UpperTab";
import { Cards } from "./Piezas/Cards";
import { Footer } from "./Piezas/Footer";

//create your first component
const Home = () => {
	return (
		<div className="general">
			<div>
				<NavBar />
			</div>
			<div className="container">
				<div className="mx-auto" style={{ width: "100%" }}>
					<UpperTab />
				</div>
			</div>
			<div className="container">
				<div className="d-flex justify-content-center align-items-center mx-auto" style={{ width: "100%" }}>
					<div className="mx-4 mt-4">
						<Cards
						name = "Sniper"
						description: "asd"
						
						  />
					</div>
					<div className="mx-4 mt-4">
						<Cards />
					</div>
					<div className="mx-4 mt-4">
						<Cards />
					</div>
					<div className="mx-4 mt-4">
						<Cards />
					</div>
				</div>
			</div>
			<div className="Footer">
				<Footer/>
			</div>
		</div>
	);
};

export default Home;