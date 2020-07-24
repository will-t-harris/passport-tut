import React from "react";
import axios from "axios";

export const Login = ({ setLoginUsername, setLoginPassword, login }) => {
	return (
		<>
			<h2>Login</h2>
			<label htmlFor="email">Email Address</label>
			<input
				type="email"
				name="email"
				className="bg-purple-100"
				onChange={(event) => setLoginUsername(event.target.value)}
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
