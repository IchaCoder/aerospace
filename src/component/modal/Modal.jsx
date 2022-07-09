import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/all";
import { Link } from "react-router-dom";

const variants = {
	visible: {
		opacity: 1,
		x: 0,
	},
	hidden: { opacity: 0, x: 200 },
};

const navVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			type: "spring",
		},
	},
};

const Modal = ({ isModalOpen, setIsModalOpen }) => {
	const handleCloseModal = (e) => {
		const targetClass = e.target.classList;
		if (targetClass.contains("fixed")) {
			setIsModalOpen(false);
		}
	};

	return (
		<>
			{isModalOpen && (
				<motion.section
					initial="hidden"
					animate="visible"
					variants={variants}
					className={`fixed w-full h-full bg-blackVariant z-20 `}
					onClick={handleCloseModal}
				>
					<div
						className="w-72 md:w-2/5 bg-primary h-full absolute right-0 text-white"
						initial="hidden"
						animate="visible"
						variants={navVariants}
					>
						<div className="flex mt-2">
							<IoMdClose
								className="text-2xl cursor-pointer ml-5"
								onClick={() => setIsModalOpen(false)}
							/>
						</div>
						<div className="mt-4 flex flex-col">
							<Link
								to="/"
								className="p-2 nav_hover w-full hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase  border-opacity-60"
							>
								Home
							</Link>
							<Link
								to="/"
								className="p-2 nav_hover w-full hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase border-opacity-60"
							>
								About
							</Link>
							<Link
								to="/"
								className="p-2 nav_hover w-full hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase border-opacity-60"
							>
								Our Team
							</Link>
							<Link
								to="/"
								className="p-2 nav_hover w-full hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase border-opacity-60"
							>
								Join Us
							</Link>
							<Link
								to="/"
								className="p-2 nav_hover w-full hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase border-opacity-60"
							>
								services
							</Link>
							<Link
								to="/"
								className="p-2 nav_hover w-full hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase border-opacity-60"
							>
								Research
							</Link>
							<Link
								to="/"
								className="p-2 nav_hover w-full hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase border-opacity-60"
							>
								Education
							</Link>
							<Link
								to="/"
								className="p-2 nav_hover w-full hover:opacity-80 focus:opacity-80 border-b border-solid border-white uppercase border-opacity-60"
							>
								contact
							</Link>
						</div>
					</div>
				</motion.section>
			)}
		</>
	);
};

export default Modal;
