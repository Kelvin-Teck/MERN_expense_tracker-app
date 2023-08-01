const userSchema = require('../models/userModel.js');

const userSignUp = async (req, res) => {
	const {email, username, password} = req.body;

	const user = userSchema({
		email,
		username,
		password
	});

	try{
		// validations

		if(!email || !username || !password){
			return res.status(400).json({message: 'All fields are required...'});
		}

		if (password.length <= 5) return res.status(400).json({message: "password is too short...should be at least 6 characters..."});

		await user.save();

		res.status(200).json({message: 'user added successfully...'});
	}catch(error){
		res.status(500).json({message: 'failed to add user...', error: error.message});
	}
}

const userSignIn = async (req, res) => {
	const {email, username, password} = req.body;
	const user = await userSchema.findOne({username}) || await userSchema.findOne({email});;

	try{
		if(password === user.password){
			return res.status(200).json({message: {username: user.username, email: user.email, image: user.image}});
		}

		res.status(400).json({message: 'invalid email or password...try again'})
	}catch(error){
		res.status(500).json({message: 'failed to login...', error: error.message});
	}
}

module.exports = {userSignUp, userSignIn};
