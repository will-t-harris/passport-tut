import React from "react";
import axios from "axios";

export const Register = ({
	setRegisterUsername,
	setRegisterPassword,
	setRegisterConfirmPassword,
	register,
}) => {
	return (
		<>
			<h2 className="pt-20">Register</h2>
			<label htmlFor="email">Email</label>
			<input
				className="bg-purple-100"
				type="email"
				name="email"
				onChange={(event) => setRegisterUsername(event.target.value)}
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
