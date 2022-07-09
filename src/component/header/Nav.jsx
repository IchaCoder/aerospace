import React, { useState } from "react";
import { GiHamburgerMenu, IoMdArrowDropdownCircle } from "react-icons/all";
import data from "../../navData";
import Submenu from "./Submenu";

const Nav = ({ setIsModalOpen }) => {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [page, setPage] = useState({ center: "", pageInfo: {} });
	const [bottom, setBottom] = useState("");

	const openSubmenu = (e) => {
		const btnName = e.target.textContent;
		const pageInfo = data.find((link) => btnName === link.title);
		setIsSubmenuOpen(true);

		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2 - 100;
		setBottom(tempBtn.bottom + 10);
		setPage({ center, pageInfo });
	};

	const handleSubmenu = (e) => {
		if (!e.target.classList.contains("link-btn")) {
			setIsSubmenuOpen(false);
		}
	};

	return (
		<>
			<nav
				className="flex justify-between pt-6 z-10 w-full absolute"
				onMouseOver={handleSubmenu}
			>
				<div className="mx-auto lg:m-5 text-3xl">Aerolabel</div>
				<div className="hidden gap-4 lg:flex relative">
					<button
						to="home"
						className="p-2 nav_hover link-btn"
						onMouseOver={openSubmenu}
					>
						Home
					</button>
					<button to="home" className="p-2 link-btn" onMouseOver={openSubmenu}>
						About
					</button>
					<button to="home" className="p-2 link-btn" onMouseOver={openSubmenu}>
						Our Team
					</button>
					<button to="home" className="p-2 link-btn" onMouseOver={openSubmenu}>
						Join Us
					</button>
					<button to="home" className="p-2 link-btn" onMouseOver={openSubmenu}>
						Services
					</button>
					<button to="home" className="p-2 link-btn" onMouseOver={openSubmenu}>
						Research
					</button>
					<button to="home" className="p-2 link-btn" onMouseOver={openSubmenu}>
						Education
					</button>
					<button to="home" className="p-2 link-btn" onMouseOver={openSubmenu}>
						Contact
					</button>
				</div>
				<GiHamburgerMenu
					className="text-3xl cursor-pointer menu-btn mr-10 menuBtn"
					onClick={() => setIsModalOpen(true)}
				/>
			</nav>
			<Submenu page={page} isSubmenuOpen={isSubmenuOpen} bottom={bottom} />
		</>
	);
};

export default Nav;
