import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const login = () => {
		axios
			.post(
				"http://localhost:5000/login",
				{ email: loginEmail, password: loginPassword },
				{ withCredentials: true }
			)
			.then((res) => console.log(res))
			.then(() => (window.location = "/"))
			.catch((err) => console.error(`Error in Axios request: ${err}`));
	};

	return (
		<>
			<h2>Login</h2>
			<label htmlFor="email">Email Address</label>
			<input
				type="email"
				name="email"
				className="bg-purple-100"
				onChange={(event) => setLoginEmail(event.target.value)}
			/>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				className="bg-purple-100"
				onChange={(event) => setLoginPassword(event.target.value)}
			/>
			<button type="submit" onClick={login}>
				Log In &#10148;
			</button>
		</>
	);
};
