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


			<div className="container" style={{ width: "100%", maxWidth: "1080px" }}>
				<div className=" d-flex flex-wrap justify-content-center gap-4">
					<UpperTab />
				</div>



				<div className="row">
					<div className="mx-auto mt-4 mb-5 col-md-3">
						<Cards
							ImageName="Sniper"
							ImageDescription="Guerrero especializado en lucha a distancia con daño terrible"
							ImageGame="src/img/hunter.jpg"

						/>
					</div>
					<div className="mx-auto mt-4 mb-5 col-md-3">
						<Cards
							ImageName="Whitesmith"
							ImageDescription="Personaje ofensiva brutal, con bufos de daño y posibilidad de romper armaduras"
							ImageGame="src/img/whitesmith.jpg"

						/>
					</div>
					<div className="mx-auto mt-4 mb-5 col-md-3">
						<Cards
							ImageName="Wizzard"
							ImageDescription="Guerrero mágico especializado en daño de área y daño elemental"
							ImageGame="src/img/mage.jpg"

						/>
					</div>
					<div className="mx-auto mt-4 mb-5 col-md-3">
						<Cards
							ImageName="Lord Knight"
							ImageDescription="Un berserker. No tiene rivales en cuerpo a cuerpo. Nada lo detiene"
							ImageGame="src/img/knight2.jpg"

						/>
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