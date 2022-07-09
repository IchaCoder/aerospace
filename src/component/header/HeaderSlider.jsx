import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/aero-1.jpg";
import image2 from "../../assets/aero-2.jpg";
import image3 from "../../assets/aero-3.jpg";
import image4 from "../../assets/aero-4.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper";
import Banner from "./Banner";

export default function App() {
	return (
		<>
			<Swiper
				className="mySwiper text-black"
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
			>
				<SwiperSlide className="slide_one relative">
					<img src={image1} alt="aero plane one" className="w-full " />
					<Banner />
				</SwiperSlide>
				<SwiperSlide className="slide_two">
					<img src={image2} alt="aero plane two" className="w-full " />
					<Banner />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image3} alt="aero plane two" className="w-full " />
					<Banner />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image4} alt="aero plane two" className="w-full " />
					<Banner />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
