import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { css } from '@emotion/react';
import NavBar from './NavBar.js';

const transactions = [
	{ id: 1, title: 'Transaction 1' },
	{ id: 2, title: 'Transaction 2' },
	{ id: 3, title: 'Transaction 3' },
	// Add more transactions as needed
];

const transactionsCss = css`max-height: 300px; overflow: auto;`;

const Transactions = () => {
	return (
		<div>
			<Paper css={transactionsCss}>
				<List>
					{transactions.map((transaction) => (
						<ListItem key={transaction.id}>
							<ListItemText primary={transaction.title} />
						</ListItem>
					))}
				</List>
			</Paper>
			<NavBar />
		</div>
	);
};



export default Transactions;
