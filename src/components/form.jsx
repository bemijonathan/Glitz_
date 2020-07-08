import React, { useContext } from "react";
import UseInput from "../customHook/input";
import { PaystackButton } from "react-paystack";
import { ShowPayment } from "../context/nav";

function componentName() {
	const [name, NameHtml] = UseInput("name", "", "text");
	const [email, EmailHtml] = UseInput("email", "", "email");
	const [phone, PhoneHtml] = UseInput("phone", "", "tel");
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const showPaymentForm = useContext(ShowPayment);
	const Submit = (e) => {
		e.preventDefault();
		let details = { name, email, phone };
		let button = document.querySelector(".__pay_now");
		button.click();
		console.log(details);
	};
	const config = {
		reference: new Date().getTime(),
		email: email,
		amount: 1000000,
		publicKey: "pk_test_b81c02664140a2298294e40ab1eb1e1242b8e966",
		text: "Pay Now",
		onSuccess: () => {
			console.log("send response to server and close");
			showPaymentForm.setPay(false);
		},
		onClose: () => {
			console.log("no payment made");
		},
	};
	const disabled = () => {
		if (name !== "" && email !== "" && phone !== "") return false;
		else return true;
	};
	return (
		<>
			<div
				className={`fixed z-20 flex items-center justify-center  w-full h-screen top-0  __slide-top ${
					showPaymentForm.pay ? "" : "__scale-out-center"
				}`}
				style={{ background: "#290754f2" }}
			>
				<div>
					<button
						className="absolute top-0 right-0 text-4xl text-white p-10"
						onClick={() => showPaymentForm.setPay(false)}
					>
						×
					</button>
					<form onSubmit={Submit}>
						<h2 className="text-white text-2xl text-center">
							Register ahead of Time
						</h2>
						<p className="text-sm text-white text-center">
							Training cost: ₦10,000 only
						</p>
						<div>{NameHtml()}</div>
						<div>{EmailHtml()}</div>
						<div>{PhoneHtml()}</div>
						<button
							className={` rounded mt-3 w-full py-2 ${
								disabled() ? "cursor-not-allowed bg-gray-300" : "bg-white"
							}`}
							disabled={disabled()}
						>
							Pay Now
						</button>
					</form>
					<div className="absolute" style={{ left: "4000px" }}>
						<PaystackButton
							{...config}
							id="paystack"
							className={`rounded mt-3 w-full py-2 bg-white __pay_now opacity-0`}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default componentName;
