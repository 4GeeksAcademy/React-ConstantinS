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


			<div className="container" style={{width:"100%", maxWidth:"1080px"}}>
				<div className="container">
						<UpperTab />
				</div>



				<div className="container">
					<div className="d-flex">
						<div className="mx-auto mt-4 mb-5">
							<Cards
								ImageName="Sniper"
								ImageDescription="asd"
								ImageGame="src/img/hunter.jpg"

							/>
						</div>
						<div className="mx-auto mt-4 mb-5">
							<Cards
								ImageName="Sniper"
								ImageDescription="asd"
								ImageGame="src/img/whitesmith.jpg"

							/>
						</div>
						<div className="mx-auto mt-4 mb-5">
							<Cards
								ImageName="Sniper"
								ImageDescription="asd"
								ImageGame="src/img/mage.jpg"

							/>
						</div>
						<div className="mx-auto mt-4 mb-5">
							<Cards
								ImageName="Sniper"
								ImageDescription="asd"
								ImageGame="src/img/knight2.jpg"

							/>
						</div>


					</div>



				</div>


			</div>


			<div className="Footer">
				<Footer />
			</div>
		</div>
	);
};

export default Home;