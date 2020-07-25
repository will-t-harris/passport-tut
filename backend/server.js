const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/User");
require("dotenv").config({ path: ".env" });

const app = express();

mongoose.connect(
	process.env.ATLAS_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
	() => {
		console.log("Mongoose connected");
	}
);

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
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//Routes
app.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) throw err;
		if (!user) res.send("No user exists");
		if (user) {
			req.logIn(user, (err) => {
				if (err) throw err;
				if (!err) {
					res.send("Successfully authenticated");
					console.log(req.user);
				}
			});
		}
	})(req, res, next);
});
app.post("/register", (req, res) => {
	User.findOne({ email: req.body.email }, async (err, doc) => {
		if (err) throw err;
		if (doc) res.send("User already exists");
		if (!doc) {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			const newUser = new User({
				email: req.body.email,
				password: hashedPassword,
			});
			await newUser.save();
			res.send("User created");
		}
	});
});
app.get("/user", (req, res) => {
	res.send(req.user);
});

app.listen(5000, () => {
	console.log("Server started");
});
