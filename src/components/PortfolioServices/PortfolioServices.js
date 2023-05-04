import React from "react";
import "./PortfolioServices.css";
import img1 from "../../assets/home-01-card-threats-ok.png";
import img2 from "../../assets/home-01-card-2.png";
import img3 from "../../assets/home-01-card-3.png";
import img4 from "../../assets/img_new3-removebg-preview.png";
import img5 from "../../assets/Smart-Contract_img-removebg-preview.png";

const PortfolioServices = () => {
	return (
		<>
			<div style={{ marginBottom: "35px" }}>
				<h1 style={{ textAlign: "center" }}>Our Portfolio of Services</h1>
				<div className="seperator1"></div>
			</div>
			<div className="main_container">
				<div class="folded_corner">
					<img className="card_img" src={img1} alt="" />
					<h3>System Audit (ISAs)</h3>
					<button class="button-48" role="button">
						<span class="text">Info and Plans</span>
					</button>
				</div>
				<div class="folded_corner">
					<img className="card_img" src={img2} alt="" />
					<h3>Risk Assessment (ISRAs)</h3>
					<button class="button-48" role="button">
						<span class="text">Info and Plans</span>
					</button>
				</div>
				<div class="folded_corner">
					<img className="card_img" src={img3} alt="" />
					<h3>System Infiltration (ISIAs)</h3>
					<button class="button-48" role="button">
						<span class="text">Info and Plans</span>
					</button>
				</div>
			</div>
			<div className="main_container2">
				<div class="folded_corner">
					<img className="card_img" src={img4} alt="" />
					<h3>GRCS (ISIACs)</h3>
					<button class="button-48" role="button">
						<span class="text">Info and Plans</span>
					</button>
				</div>
				<div class="folded_corner">
					<img className="card_img" src={img5} alt="" />
					<h3>Security Coaching (ISCs)</h3>
					<button class="button-48" role="button">
						<span class="text">Info and Plans</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default PortfolioServices;
