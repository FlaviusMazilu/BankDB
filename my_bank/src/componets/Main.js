import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavBar from './NavBar.js';

const Main = () => {
	return (
		<Grid container spacing={2}>

			<Grid item xs={12}>
				<Paper variant='elevation'>
					{/* Welcome section */}
					<h1>Welcome to My Bank</h1>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper>
					{/* Current balance section */}
					<h2>Current Balance: $1000</h2>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper>
					{/* Last three transactions section */}
					<h2>Last Three Transactions:</h2>
					<ul>
						<li>Transaction 1</li>
						<li>Transaction 2</li>
						<li>Transaction 3</li>
					</ul>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper>
					{/* News section */}
					<h2>News:</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Paper>
			</Grid>

			<NavBar />
		</Grid>
	);
};

export default Main;
