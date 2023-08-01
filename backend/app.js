const express = require('express');
const cors = require('cors');
const app = express();
const {db} = require('./db/db.js');
const {readdirSync} = require('fs');
const transactionRoutes = require('./routes/transactions.js');
const userRoutes = require('./routes/user.js');


require('dotenv').config();
const PORT = process.env.PORT || 4999;

// Middleware
app.use(express.json());
app.use(cors());

// routes
readdirSync('./routes').map( route => app.use('/api/v1', require('./routes/' + route)));


const server = async  () => {
	await db()
	app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));
}

server();