const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "http://localhost:3000", // React app port
		credentials: true,
	})
);

app.use(
	expressSession({
		secret: "secretcode",
		resave: false,
		saveUninitialized: false,
	})
);

app.use(cookieParser("secretcode"));

//Routes
app.post("/login", (req, res) => {
	console.log(req.body);
});
app.post("/register", (req, res) => {
	console.log(req.body);
});
app.get("/user", (req, res) => {
	console.log(req.body);
});

app.listen(5000, () => {
	console.log("Server started");
});
