import React, { useState } from "react";
import axios from "axios";

export const Register = () => {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
	const register = () => {
		axios
			.post(
				"http://localhost:5000/register",
				{ email: registerEmail, password: registerPassword },
				{ withCredentials: true }
			)
			.then((res) => console.log(res))
			.then(() => (window.location = "/"))
			.catch((err) => console.error(`Error in Axios call: ${err}`));
	};
	return (
		<>
			<h2 className="pt-20">Register</h2>
			<label htmlFor="email">Email</label>
			<input
				className="bg-purple-100"
				type="email"
				name="email"
				required={true}
				onChange={(event) => setRegisterEmail(event.target.value)}
			/>
			<label htmlFor="password">Password</label>
			<input
				className="bg-purple-100"
				type="password"
				name="password"
				minLength={8}
				onChange={(event) => setRegisterPassword(event.target.value)}
			/>
			<label htmlFor="passwordConfirm">Confirm Password</label>
			<input
				className="bg-purple-100"
				type="password"
				name="passwordConfirm"
				minLength={8}
				onChange={(event) => setRegisterConfirmPassword(event.target.value)}
			/>
			<button onClick={register}>Register &#10148;</button>
		</>
	);
};
