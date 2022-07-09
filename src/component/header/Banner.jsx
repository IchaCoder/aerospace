import React from "react";

const Banner = () => {
	return (
		<div
			className={`max-w-max md:w-4/5 p-8 bg-primary absolute text-white bg-opacity-80 grid place-items-center`}
		>
			<h1 className="text-4xl md:text-5xl">
				{" "}
				<span className="text-black font-bold">Aerobable</span> has arrived
			</h1>
			<h4 className="text-sm md:text-lg">
				Come let us shape the future of aerospace with our cutting edge
				innovations
			</h4>
		</div>
	);
};

export default Banner;
