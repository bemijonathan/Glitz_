import React, { useState } from "react";

export default function Feature() {
	const [list] = useState([
		{
			img: "assets/images/work 1.png",
			title: "Get real employable skills",
			subtitle:
				"Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.",
		},
		{
			img: "assets/images/work2.png",
			title: "Project-based, active learning",
			subtitle:
				"Learn by doing with real-world projects and other hands-on exercises that lead to real skills mastery.",
		},
		{
			img: "assets/images/work 3.png",
			title: "The help you need, when you need it",
			subtitle:
				"Reach out to our mentors 24/7 and have your coding questions answered quickly so you can keep learning.",
		},
	]);

	const features = () => {
		return list.map((element, index) => {
			return (
				<div
					id="about"
					className="p-4 md:w-1/3"
					key={index}
					data-scrolly-down="bounceInBottom"
				>
					<div className="flex rounded-lg h-full  p-8">
						<div className="items-center mb-3 text-center">
							<div className="text-center">
								<img
									src={element.img}
									width="50"
									className="m-auto mb-5"
									alt="...."
								/>
							</div>
							<h2 className="text-gray-900 text-lg title-font font-medium">
								{element.title}
							</h2>
							<p className="leading-relaxed text-base">{element.subtitle}</p>
							<a
								className="mt-3 text-indigo-500 inline-flex items-center"
								href="/"
							>
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<section className="text-gray-700">
			<div className="container px-5 py-24 mx-auto text-center">
				<div
					className="flex flex-col text-center w-full mb-20"
					data-scrolly-down="blurInTop, duration:2s"
				>
					<h1 className="text-5xl font-medium" style={{ color: "#26053A" }}>
						Don't waste your valuable time or money
					</h1>
					<h2 className="text-3xl text-black tracking-wide mt-2 font-light title-font mb-1">
						Only Udacity has all the critical factors to deliver real results
					</h2>
				</div>
				<div className="flex flex-wrap -m-4">{features()}</div>
				<button
					style={{ background: "#26053A" }}
					className="px-10 py-2 rounded-full text-white"
				>
					Register
				</button>
			</div>
		</section>
	);
}
