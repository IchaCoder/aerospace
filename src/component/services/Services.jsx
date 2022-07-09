import React from "react";
import ServiceList from "./ServiceList.";
import "./services.css";

const Services = () => {
	return (
		<main className="mt-40">
			<h1 className="text-4xl md:text-6xl text-center">
				<span className="text-primary ">Our</span> Services
			</h1>
			<section className="mt-52 bg-primary">
				<ServiceList />
			</section>
		</main>
	);
};

export default Services;
