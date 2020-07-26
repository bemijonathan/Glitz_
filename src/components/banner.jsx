import React, { useContext } from "react";
import { ShowPayment } from "../context/nav";

export default function banner() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const payNow = useContext(ShowPayment);
	return (
		<section className="text-gray-500 bg-gray-900 body-font __banner py-20 md:py-0">
			<div className="container mx-auto ">
				<div className="flex flex-col sm:flex-row items-center justify-between mx-auto  md:h-screen w-full">
					<div className="hidden md:block w-1/2">
						<img src="assets/images/web-mockup.png" alt="........." />
					</div>
					<div className="flex-grow md:text-5xl text-3xl text-white font-medium title-font text-white __banner_text px-3 cssanimation leFadeIn sequence ">
						Startup? you can build your website with WordPress, Learn How To.
						<div className="mt-4 md:mt-0">
							<button
								className="px-10 py-2 bg-purple-700 rounded-lg text-xl hover:bg-white hover:text-purple-900"
								onClick={() => payNow.setPay(true)}
							>
								Register
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
