import React, { useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import data from "../../navData";

const Submenu = ({ page, isSubmenuOpen, bottom }) => {
	const navRef = useRef(null);
	const { links } = page.pageInfo;

	const moveSubmenu = (location) => {
		navRef.current.style.left = `${location}px`;
		navRef.current.style.top = `${bottom}px`;
	};

	useEffect(() => {
		moveSubmenu(page.center);
	}, [page]);

	return (
		<>
			<div
				className={`absolute transition-all duration-300 z-10 ease-linear top-8 w-auto h-auto p-2 rounded-lg bg-primary  grid grid-cols-3 gap-x-4  ${
					!isSubmenuOpen && "hidden"
				} ${links?.length < 1 && "hidden"} `}
				ref={navRef}
			>
				{links?.map((link, key) => {
					const { label, url } = link;
					return (
						<Link
							key={key}
							to={url}
							className=" hover:bg-slate-900 p-2 transition-all duration-300 z-10 ease-linear"
						>
							{label}
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Submenu;
