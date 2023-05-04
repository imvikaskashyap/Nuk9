import React from "react";
import Banner from "../Home/Banner/Banner";
import PortfolioServices from "../PortfolioServices/PortfolioServices";
import InfoSection from "../InfoSection/InfoSection";

const Home = () => {
	return (
		<>
			<div>
				<Banner />
				<InfoSection />
				<PortfolioServices />
			</div>
		</>
	);
};

export default Home;
