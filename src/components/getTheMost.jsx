import React, { useState } from "react";

export default function GetTheMost() {
	const [list] = useState([
		"Duo in nominati adolescens",
		"Duo in nominati adolescens",
		"Duo in nominati adolescens",
		"Duo in nominati adolescens",
		"Duo in nominati adolescens",
		"Duo in nominati adolescens",
	]);
	return (
		<>
			<div
				style={{ background: "rgba(229, 229, 229, 0.31)" }}
				className="py-10"
			>
				<h2 className="text-3xl text-center  mb-5">
					Get The Most Out Of This Training
				</h2>
				<div className="flex flex-wrap justify-center">
					<div
						className="m-5 p-5 md:w-2/5 rounded-lg p-8"
						style={{ background: "#26053A" }}
						data-scrolly-down="fadeInLeft"
					>
						<h1 className="text-white font-bold my-3 text-xl">
							{"Who is this Training Meant For".toUpperCase()}
						</h1>
						{list.map((e, key) => {
							return (
								<li className="text-white list-none mb-2" key={key + "a"}>
									<img
										src="assets/images/Group 37.png"
										className="inline mr-3"
										alt="..."
									/>
									{e}
								</li>
							);
						})}
					</div>
					<div
						className="m-5 p-5 md:w-2/5 rounded-lg p-8"
						style={{ background: "#26053A" }}
						data-scrolly-down="fadeInRight"
					>
						<h1 className="text-white font-bold my-3 text-xl">
							{"What you will learn in this training".toUpperCase()}
						</h1>
						{list.map((e, key) => {
							return (
								<li className="text-white list-none mb-2" key={key + "b"}>
									<img
										src="assets/images/Group 37.png"
										className="inline mr-3"
										alt="..."
									/>
									{e}
								</li>
							);
						})}
					</div>
				</div>
				<div className="text-center mt-10">
					<button
						style={{ background: "#26053A" }}
						className="px-10 py-2 rounded-full text-white"
					>
						Register
					</button>
				</div>
			</div>
		</>
	);
}
