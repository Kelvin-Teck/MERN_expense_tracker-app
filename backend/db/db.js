const mongoose = require('mongoose');




const db = async () => {
	let MONGO_DB = process.env.MONGO_URI || process.env.MONGO_LOCAL_URI;
	try{
		mongoose.set('strictQuery', false);
		await mongoose.connect(MONGO_DB, {
			dbName: "expense-tracker",
			useNewUrlParser: true,
			useUnifiedTopology:true,
		});
		console.log("database connected succesfully...");
	}catch(error){
		console.log(`database connection failed ${error.message}...`);
	}
}

module.exports = {db};