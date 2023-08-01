const expenseSchema = require('../models/expenseModel.js');


const addExpense = async (req, res) => {
	const {title, amount, category, description, date} = req.body;

	const expense = expenseSchema({
		title,
		amount,
		category,
		description,
		date
	});

	try{
		// validations

		if(!title || !amount || !category || !description || !date){
			return res.status(400).json({message: 'All fields are required...'});
		}

		if(amount <= 0 || !amount === 'number'){
			return res.status(400).json({message: 'Amount must be a positive number...'});
		}

		await expense.save();

		res.status(200).json({message: 'expense added successfully...'});
	}catch(error){
		res.status(500).json({message: 'failed to add expense...', error: error.message});
	}

}

const getExpenses = async (req, res) => {
  try{
  	const expenses = await expenseSchema.find().sort({createdAt: -1});
  	res.status(200).json(expenses)
  }catch(error){
  	res.status(500).json({message: 'could not fetch all expenses...', error: error.message});
  }
}

const deleteExpense = async (req, res) => {
	const {id} = req.params;
	expenseSchema.findByIdAndDelete(id).then( expense => res.status(200).json({message: 'expense deleted successfully...'})).catch(err => res.status(500).json({message: 'could not delete expense...', error: err.message}))
}


module.exports = {addExpense, getExpenses, deleteExpense};
