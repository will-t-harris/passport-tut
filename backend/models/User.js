const mongoose = require("mongoose");
const validator = require("validator");
// const { check } = require("express-validator");

const user = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		validate: [validator.isEmail, "Please supply an email address"],
		requred: "Email address is required",
	},
	password: String,
});

module.exports = mongoose.model("User", user);
