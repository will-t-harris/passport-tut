import React, { useEffect, useState } from "react";
import axios from "axios";

import { TodoItem } from "../components/TodoItem";
import { Header } from "./Header";

export const TodoList = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/")
			.then((res) => setTodos(res.data))
			.catch((err) => `Error in Axios request: ${err}`);
	}, []);

	const deleteTodo = (id) => {
		axios
			.delete(`http://localhost:5000/todos/${id}`)
			.then((res) => console.log(res.data))
			.catch((err) => console.error(`Error in deleteTodo: ${err}`));

		const filteredTodos = todos.filter((todo) => todo._id !== id);
		setTodos(filteredTodos);
	};

	return (
		<>
			<Header headerText="Pony Express" />
			<div className="flex flex-col space-y-0">
				{todos.map((todo) => (
					<TodoItem
						key={todo._id}
						id={todo._id}
						todoContent={todo.todoContent}
						todoPriority={todo.todoPriority}
						todoDate={todo.todoDate}
						deleteTodo={deleteTodo}
					/>
				))}
			</div>
		</>
	);
};
