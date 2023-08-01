const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: [true, "Email already exists"],
		require: [true, "Email is required"]
	},
	username: {
		type: String,
		unique: [true, "username is required"],
		require: [true, "username is required"]
	},
	password: {
		type: String,
		require:[true, "password is required"]
	},
	image: {
		type: String,
		default: ''
	}

}, {timestamps: true});


module.exports = mongoose.model("User", UserSchema)

