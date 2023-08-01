const express = require('express');
const router = express.Router();
const {userSignUp, userSignIn} = require('../controllers/user.js');

router.post('/signup', userSignUp)
	  .post('/signin', userSignIn)

module.exports = router;