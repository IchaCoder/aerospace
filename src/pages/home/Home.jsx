import React, { useState } from "react";
import "./home.css";
import Nav from "../../component/header/Nav";
import HeaderSlider from "../../component/header/HeaderSlider";
import Services from "../../component/services/Services";
import Footer from "../../component/footer/Footer";

const Home = ({ setIsModalOpen }) => {
	return (
		<>
			<header className="home__header bg-black text-white relative">
				<Nav setIsModalOpen={setIsModalOpen} />
				<HeaderSlider />
			</header>
			<Services />
			<Footer />
		</>
	);
};

export default Home;
