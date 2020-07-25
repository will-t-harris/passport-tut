const mongoose = require("mongoose");
const Todo = mongoose.model("Todo");

exports.getAllTodos = (req, res) => {
	// For now, grab all todos in DB
	//? Does this need to be asnyc?
	Todo.find()
		.then((todos) => todos.sort((a, b) => a.todoDate - b.todoDate))
		.then((todos) => res.json(todos))
		.catch((err) => res.status(400).json(`Error in getAllTodos: ${err}`));
};

exports.addTodo = (req, res) => {
	const newTodo = new Todo({
		todoContent: req.body.todoContent,
		todoPriority: req.body.todoPriority,
		todoDate: req.body.todoDate,
	});

	newTodo
		.save()
		.then(() => res.json("Todo added!"))
		.catch((err) => res.status(400).json(`Error in addTodo: ${err}`));
};

exports.deleteTodoById = (req, res) => {
	Todo.findByIdAndDelete(req.params.id)
		.then(() => res.json("Todo deleted"))
		.catch((err) => res.status(400).json(`Error in deleteTodoById: ${err}`));
};
