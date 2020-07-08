import React, { useContext } from "react";
import { showNav } from "../context/nav";

export default function MobileNav() {
	const closeNav = useContext(showNav);
	console.log(closeNav);
	return (
		<>
			<div
				className={`relative __slide-top ${
					closeNav.show ? "" : "__scale-out-center"
				}`}
			>
				<div
					className="fixed w-screen h-screen z-10 flex items-center justify-center"
					style={{ background: "#290754" }}
				>
					<button
						className="absolute top-0 right-0 text-4xl text-white p-10"
						onClick={() => closeNav.setShow(false)}
					>
						×
					</button>
					<nav className="md:ml-auto md:mr-auto justify-center text-center text-2xl">
						<div className="m-5 cursor-pointer text-white">
							<a
								href="#about"
								className="mr-5 cursor-pointer text-white"
								onClick={() => closeNav.setShow(false)}
							>
								About
							</a>
						</div>
						<div className="m-5 cursor-pointer text-white">
							<a
								href="#schedule"
								className="mr-5 cursor-pointer text-white"
								onClick={() => closeNav.setShow(false)}
							>
								Schedule
							</a>
						</div>
						<div className="m-5 cursor-pointer text-white">
							<a
								href="#training"
								className="mr-5 cursor-pointer text-white"
								onClick={() => closeNav.setShow(false)}
							>
								Training
							</a>
						</div>
						<div className="m-5 cursor-pointer text-white">
							<a
								href="#register"
								className="mr-5 cursor-pointer text-white"
								onClick={() => closeNav.setShow(false)}
							>
								Register
							</a>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
}
