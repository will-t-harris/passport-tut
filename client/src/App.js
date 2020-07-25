import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { TodoList } from "./components/TodoList";

function App() {
	const [data, setData] = useState(null);

	const getUser = () => {
		axios
			.get("http://localhost:5000/user", { withCredentials: true })
			.then((res) => setData(res.data));
	};

	return (
		<Router>
			<Route path="/" exact component={TodoList} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Router>
	);
}

{
	/* <h2>Get User</h2>
<button onClick={getUser}>Submit</button>
{data ? <h3>Welcome Back {data.username}</h3> : null} */
}
export default App;
