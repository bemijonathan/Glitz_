import React from "react";

export default function Space() {
	return (
		<>
			<section
				className="__spacer text-white text-center flex items-center justify-center"
				id="training"
			>
				<div>
					<h1 className="text-5xl font-bold"> Limited Space </h1>
					<p className="text-3xl w-2/3 mx-auto mb-2">
						Only 15 students will be taken for this training, so register now to
						reserve your space today.
					</p>
					<h2 className="__number font-bold">13+</h2>
					<p className="text-3xl">Registered Students</p>
					<button className="text-white border-2 border-indigo-700 text-2xl px-20 py-2 rounded-full mt-3 hover:bg-white hover:text-indigo-700 hover:border-white">
						Register Now
					</button>
				</div>
			</section>
		</>
	);
}
