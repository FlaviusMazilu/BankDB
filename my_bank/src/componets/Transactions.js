import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { css } from '@emotion/react';
import NavBar from './NavBar.js';
import LastTransactions from './LastTransactions.js';
import {useEffect, useState} from 'react';
import { alignProperty } from '@mui/material/styles/cssUtils.js';
const transactions = [
	{ id: 1, title: 'Transaction 1' },
	{ id: 2, title: 'Transaction 2' },
	{ id: 3, title: 'Transaction 3' },
	// Add more transactions as needed
];

const transactionsCss = css`max-height: 300px; overflow: auto;`;
const headerStyle = {
    backgroundColor: '#eaeaea',
    padding: '10px',
    border: '1px solid #ccc',
	textAlign: 'center'
  };
const Transactions = () => {
	const [user, setUser] = useState();
	useEffect(() => {
		  fetch("http://127.0.0.1:8000/api/v1/users/6574c8d5ded2894650bea042")
		  	.then(data => data.json())
			.then(dt => setUser(dt.data.user))
			.catch (error =>  console.error('Error fetching data:', error));
	}, []);
	if (user) {
		return (
			<div>
				<h2 style={headerStyle}>All transactions</h2>
				<LastTransactions transactions={user.transactions} length={user.transactions.length}/>
				<NavBar />
			</div>
		);
	}
	else {
		return <p>Loading...</p>
	}
};

export default Transactions;
