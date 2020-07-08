import React, { useState } from "react";
import Nav from "./components/nav";
import Banner from "./components/banner";
import "./css/custom.css";
import Feature from "./components/feature";
import Space from "./components/space";
import GetTheMost from "./components/getTheMost";
import Training from "./components/training";
import { showNav, ShowPayment } from "./context/nav";
import MobileNav from "./components/mobile-nav";
import FormComponent from "./components/form";
import Footer from "./components/footer";

function App() {
	const [show, setShow] = useState(false);
	const [pay, setPay] = useState(false);
	return (
		<div className={show || pay ? "overflow-hidden h-screen" : ""}>
			<ShowPayment.Provider value={{ pay, setPay }}>
				<showNav.Provider value={{ show, setShow }}>
					<Nav />
					{show ? <MobileNav /> : ""}
				</showNav.Provider>
				<Banner />
				{pay ? <FormComponent /> : ""}
				<Feature />
				<Space />
				<GetTheMost />
				<Training />
				<Footer />
			</ShowPayment.Provider>
		</div>
	);
}

export default App;
