import React, { useState } from "react";
import axios from "axios";

import { Register } from "./components/Register";
import { Login } from "./components/Login";

function App() {
	const [registerUsername, setRegisterUsername] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
	const [loginUsername, setLoginUsername] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [data, setData] = useState(null);

	const register = () => {
		axios
			.post(
				"http://localhost:5000/register",
				{ username: registerUsername, password: registerPassword },
				{ withCredentials: true }
			)
			.then((res) => console.log(res));
	};
	const login = () => {
		axios
			.post(
				"http://localhost:5000/login",
				{ username: loginUsername, password: loginPassword },
				{ withCredentials: true }
			)
			.then((res) => console.log(res));
	};
	const getUser = () => {
		axios
			.get("http://localhost:5000/user", { withCredentials: true })
			.then((res) => setData(res.data));
	};

	return (
		<div className="App">
			<div>
				<Register
					register={register}
					setRegisterConfirmPassword={setRegisterConfirmPassword}
					setRegisterPassword={setRegisterPassword}
					setRegisterUsername={setRegisterUsername}
				/>
			</div>

			<div>
				<Login
					login={login}
					setLoginUsername={setLoginUsername}
					setLoginPassword={setLoginPassword}
				/>
			</div>

			<div>
				<h1>Get User</h1>
				<button onClick={getUser}>Submit</button>
				{data ? <h1>Welcome Back {data.username}</h1> : null}
			</div>
		</div>
	);
}

export default App;
