import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavBar from './NavBar.js';
import LastTransactions from './LastTransactions';

export const Homepage = () => {
	return (
		<div>
			<Grid container spacing={2} justifyContent="center" alignItems="center">
				<Grid item xs={12}>
					<Paper variant='elevation'>
						{/* Welcome section */}
						<h1 style={{ textAlign: 'center' }}>Welcome to My Bank</h1>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper>
						{/* Current balance section */}
						<h2>Current Balance: $1000</h2>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<LastTransactions/>
				</Grid>
				<Grid item xs={12}>
					<Paper>
						{/* News section */}
						<h2>News:</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Paper>
				</Grid>
			</Grid>
			<NavBar />
		</div>
	);
};