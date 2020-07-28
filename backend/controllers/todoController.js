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

exports.getTodoById = async (req, res) => {
	Todo.findById(req.params.id)
		.then((todo) => res.json(todo))
		.catch((err) => res.status(400).json(`Error: ${err}`));
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

exports.editTodoById = (req, res) => {
	Todo.findById(req.params.id).then((todo) => {
		(todo.todoContent = req.body.todoContent),
			(todo.todoPriority = req.body.todoPriority),
			(todo.todoDate = req.body.todoDate);

		todo
			.save()
			.then(() => res.json("Todo Updated"))
			.catch((err) => `Error saving todo: ${err}`);
	});
};
