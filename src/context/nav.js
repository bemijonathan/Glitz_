import { createContext } from "react";

export const showNav = createContext({
	show: false,
	setShow: function () {},
});

export const ShowPayment = createContext({
	pay: false,
	setPay: function () {},
});
