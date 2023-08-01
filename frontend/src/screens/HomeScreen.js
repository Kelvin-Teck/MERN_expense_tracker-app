import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import {MainLayout} from '../styles/Layouts';
import Navigation from '../components/Navigation/Navigation';
import Dashboard from '../components/Dashboard/Dashboard';
import Transactions from '../components/Transactions/Transactions';
import Incomes from '../components/Incomes/Incomes';
import Expenses from '../components/Expenses/Expenses';

const HomeScreen = () => {

	return (
		<HomeScreenStyled>
			<MainLayout>
	          <Navigation />
	          <main>
	            <Routes>
	            	<Route path="/" element={<Dashboard />}/>
	            	<Route path="/transactions" element={<Transactions />}/>
	            	<Route path="/income" element={<Incomes />}/>
	            	<Route path="/expense" element={<Expenses />}/>
	            </Routes>
	          </main>
          </MainLayout>
		</HomeScreenStyled>
	)	
}

const HomeScreenStyled = styled.div`
	main{
    flex: 2;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`

export default HomeScreen;