import React from "react";
import { GrInstagram, GrTwitter, GrYoutube } from "react-icons/gr";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="p-2 mt-32 text-white ">
			<div className="md:flex gap-4">
				<div className="flex-1 ">
					<h3 className="text-center text-2xl pt-5">Contact us</h3>
					<div className="flex justify-evenly pt-3">
						<GrInstagram className="text-3xl hover:text-red-900 cursor-pointer transitions" />
						<GrTwitter className="text-3xl hover:text-blue-600 cursor-pointer transitions" />
						<GrYoutube className="text-3xl hover:text-red-700 cursor-pointer transitions" />
					</div>
				</div>
				<div className="cursor-pointer mt-5 flex-1 text-2xl text-center">
					Terms and conditions
				</div>
			</div>
			<p className="p-2">Copyright AeroLabel {new Date().getFullYear()} </p>
		</footer>
	);
};

export default Footer;
