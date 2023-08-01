import {useEffect} from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';

function Transactions(){
    const {transactionHistory, getIncomes, getExpenses} = useGlobalContext()

    const [...history] = transactionHistory()

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, [])

	return (
		<TransactionsStyled>
			<InnerLayout>
            <h2>Transctions History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}

			</InnerLayout>
		</TransactionsStyled>
	)
}


const TransactionsStyled = styled.div`
	padding: .5em;
    
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: .5em 0;
    }
`;

export default Transactions;