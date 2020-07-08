import React, { useState } from "react";

export default function Training() {
	const [schedule] = useState([
		{
			title: "3 Weeks",
			content:
				"The intensive training is designed to last for 3 weeks. It’s going to be an interesting one.",
		},
		{
			title: "2 Days Per Week",
			content:
				"Two days in a week, Saturdays and sundays. This is to make sure that it will be convinient for all participants.",
		},
		{
			title: "2 Hours Per day",
			content:
				"It’s going to be an itensive 2 hours class per day, which is mostly going to be practicals and a bit of theory",
		},
	]);
	return (
		<>
			<section className="text-gray-700 body-font" id="schedule">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-10">
						<h2 className="text-3xl  title-font mb-1">Training Schedule</h2>
						<h1 className="text-2xl title-font mb-4 text-gray-900">
							The following is how the training is going to run in terms of
							duration.
						</h1>
					</div>
					<div
						className="flex flex-wrap  justify-center "
						style={{ color: "rgba(38, 5, 58, 1)" }}
					>
						{schedule.map((e, key) => {
							return (
								<div
									className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-3 border-l-2"
									style={{ borderColor: "#26053A" }}
									key={key}
								>
									<h2 className="underline text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
										{e.title}
									</h2>
									<p className="leading-relaxed text-black mb-2">{e.content}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
