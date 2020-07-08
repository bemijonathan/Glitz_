import React, { useContext } from "react";
import { showNav } from "../context/nav";

export default function Nav() {
	const Toggle = useContext(showNav);
	return (
		<header className="text-gray-500 body-font fixed w-full __header z-10">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  hidden md:flex">
				<a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
					<img src="/assets/images/logo.png " width="200" />
				</a>
				<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
					<a className="mr-5 cursor-pointer text-white">About</a>
					<a className="mr-5 cursor-pointer text-white">Schedule</a>
					<a className="mr-5 cursor-pointer text-white">Training</a>
					<a className="mr-5 cursor-pointer text-white">Register</a>
				</nav>
				<button className="inline-flex items-center text-white bg-gray-800 border-0 py-2 px-5 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
					Register
				</button>
			</div>
			<div>
				<div className="flex items-center justify-between w-full px-5 py-1 md:hidden shadow">
					<a className="flex title-font font-medium items-center text-white md:mb-0">
						<img
							src="/assets/images/logo.png "
							width="200"
							className="in-line"
						/>
					</a>
					<div
						className="__hamburger cursor-pointer"
						onClick={() => Toggle.setShow(true)}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
}
