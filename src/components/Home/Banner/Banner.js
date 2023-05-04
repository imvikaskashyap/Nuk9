import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import banner1 from "../../../assets/284930_0671922647284e56adc03ee0453a55f9.jpg";
import banner2 from "../../../assets/284930_c7474aa337a04916a21d5fd3e65d6575.jpg";
import banner3 from "../../../assets/slider2.jpg";

const Banner = () => {
	return (
		<>
			<Carousel indicators={false} className="main_carousel">
				<Carousel.Item interval={3000}>
					<img className="d-block w-100 h-80" src={banner1} alt="banner1" />
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img
						className="d-block w-100 h-80"
						src={banner2}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img className="d-block w-100 h-80" src={banner3} alt="Third slide" />
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Banner;
