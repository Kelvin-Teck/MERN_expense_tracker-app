const incomeSchema = require('../models/incomeModel.js');


const addIncome = async (req, res) => {
	const {title, amount, category, description, date} = req.body;

	const income = incomeSchema({
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

		await income.save();

		res.status(200).json({message: 'income added successfully...'});
	}catch(error){
		res.status(500).json({message: 'failed to add income...', error: error.message});
	}

}

const getIncomes = async (req, res) => {
  try{
  	const incomes = await incomeSchema.find().sort({createdAt: -1});
  	res.status(200).json(incomes)
  }catch(error){
  	res.status(500).json({message: 'could not fetch all incomes...', error: error.message});
  }
}

const deleteIncome = async (req, res) => {
	const {id} = req.params;
	incomeSchema.findByIdAndDelete(id).then( income => res.status(200).json({message: 'income deleted successfully...'})).catch(err => res.status(500).json({message: 'could not delete income...', error: err.message}))
}


module.exports = {addIncome, getIncomes, deleteIncome};
