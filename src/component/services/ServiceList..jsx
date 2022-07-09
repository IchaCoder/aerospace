import React from "react";

const ServiceList = () => {
	return (
		<div className="mx-auto md:max-w-pref flex sm:flex-row md:flex-row-2 flex-wrap flex-col main_card sm:gap-y-14 gap-10 sm:gap-x-0">
			<div className="bg-white max-w-semiMax mx-auto main_card p-8 -top-32  ">
				<h2 className="text-3xl mb-2">Education</h2>
				<p>
					There are possibilities to join the aerobabel at practically any
					educational level, whether you want to get a degree online or just
					want to work. We'll help you find your strengths, acquire a degree,
					gain leadership experience, and advance your Air Force career
				</p>
			</div>
			<div className="bg-white max-w-semiMax mx-auto main_card p-8 lg:w-3/12">
				<h2 className="text-3xl mb-2 ">Research</h2>
				<p>
					Take a look at some of our interesting researches that we have. We
					have a lot of deep research programs, files, and scripts for many
					disciplines in the aerospace business.
				</p>
			</div>
			<div className="bg-white max-w-semiMax mx-auto main_card p-8 lg:w-3/12">
				<h2 className="text-3xl mb-2 ">Careers</h2>
				<p className="mb-8">
					Want to Work with Us? We are always in search of new open-minded,
					creative and enthusiastic people to work on complex projects
				</p>
				<a
					href="#"
					className="action_btn px-5 bg-primary rounded text-white hover:bg-white hover:border-2 border-solid border-primary hover:text-black transitions"
				>
					Join our team
				</a>
			</div>
			<div className="bg-white max-w-semiMax mx-auto main_card p-8 lg:w-3/12">
				<h2 className="text-3xl mb-2 ">Become an educator.</h2>
				<p className="mb-8">
					On Aerobabel, instructors from all around the world teach millions of
					students. We give you the tools and training you need to teach what
					you enjoy
				</p>
				<a
					href="#"
					className="action_btn px-5 mt-4 mb-10 bg-primary rounded text-white hover:bg-white hover:border-2 border-solid border-primary hover:text-black transitions"
				>
					Start teaching today
				</a>
			</div>
		</div>
	);
};

export default ServiceList;
