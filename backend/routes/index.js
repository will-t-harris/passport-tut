const router = require("express").Router();
const userController = require("../controllers/userController");
const todoController = require("../controllers/todoController");

router.get("/", todoController.getAllTodos);

router.post("/add", todoController.addTodo);

router.delete("/todos/:id", todoController.deleteTodoById);
router.get("/todos/:id", todoController.getTodoById);
router.post("/edit/:id", todoController.editTodoById);

module.exports = router;
