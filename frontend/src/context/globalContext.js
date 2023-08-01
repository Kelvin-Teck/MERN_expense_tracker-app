import React, {useState, useContext} from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/';

const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {
	const [incomes, setIncomes] = useState([]);
	const [expenses, setExpenses] = useState([]);
	const [user, setUser] = useState([]);
	const [error, setError] = useState(null);

	// expense context...
	const addExpense = async (expense) => {
		const response = await axios.post(`${BASE_URL}add-expense`, expense)
			.catch( err => setError(err.response.data.message));
		getExpenses();
	}

	const getExpenses = async () => {
		await axios.get(`${BASE_URL}get-expenses`)
		.then(response => setExpenses(response.data))
		.catch(err => setError(err.message))
	}

	const deleteExpense = async (id) => {
		await axios.delete(`${BASE_URL}delete-expense/${id}`);
		getExpenses();
	}

	const totalExpense = () => {
		let totalExpense = 0;
		expenses.forEach( expense => {
			totalExpense += expense.amount;
		});

		return totalExpense;
	}


	// income context...
	const addIncome = async (income) => {
		const response = await axios.post(`${BASE_URL}add-income`, income)
			.catch( err => setError(err.response.data.message));

		getIncomes();
	}

	const getIncomes = async () => {
		await axios.get(`${BASE_URL}get-incomes`)
		.then( response => setIncomes(response.data))
		.catch(err => setError(err.message))
	}

	const deleteIncome = async (id) => {
		await axios.delete(`${BASE_URL}delete-income/${id}`);
		getIncomes();
	}

	const totalIncome = () => {
		let totalIncome = 0;
		incomes.forEach( income => {
			totalIncome += income.amount;
		});

		return totalIncome;
	}

	const totalBalance = () => {
		return totalIncome() - totalExpense();
	}

	const transactionHistory = () => {
		const history = [...incomes, ...expenses];
		history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		return history;
	}


	return (
			<GlobalContext.Provider value={{
				addIncome,
				getIncomes,
				incomes,
				deleteIncome,
				totalIncome,
				addExpense,
				getExpenses,
				deleteExpense,
				expenses,
				totalExpense,
				totalBalance,
				transactionHistory,
				error,
				setError
			}}>
				{children}
			</GlobalContext.Provider>
		)
}

export const useGlobalContext = () => {
	return useContext(GlobalContext)
}