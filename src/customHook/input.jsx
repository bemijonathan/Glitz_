import React, { useState } from "react";

export default function UseInput(label, value, type) {
	const [input, setInput] = useState(value);
	const field = () => {
		return (
			<div className="pt-3">
				<input
					className="px-5 py-2 w-full"
					placeholder={label}
					onChange={(e) => setInput(e.target.value)}
					type={type}
				/>
			</div>
		);
	};
	return [input, field];
}
