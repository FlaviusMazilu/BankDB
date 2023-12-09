import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavBar from './NavBar.js';

const Cashback = () => {
	return (
		<div>
		<Grid item xs={12}>
			<Paper>
				{/* Cashback section */}
				<h2>Cashback:</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Paper>
		</Grid>
		<NavBar />
		</div>
	);
}

export default Cashback;