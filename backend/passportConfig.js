const User = require("./User");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
	passport.use(
		new LocalStrategy((username, password, done) => {
			User.findOne({ username }, (err, user) => {
				if (err) throw err;
				if (!user) return done(null, false);
				if (user) {
					bcrypt.compare(password, user.password, (err, result) => {
						if (err) throw err;
						if (result === true) {
							return done(null, user);
						} else {
							return done(null, false);
						}
					});
				}
			});
		})
	);

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});
	passport.deserializeUser((id, done) => {
		User.findOne({ _id: id }, (err, user) => {
			//! Can restrict what is sent back in the user object like this
			// const userInformation = { username: userInformation };
			// done(err, userInformation)
			done(err, user);
		});
	});
};
