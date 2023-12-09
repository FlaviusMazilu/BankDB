import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavBar from './NavBar.js';
import LastTransactions from './LastTransactions';
import {useEffect, useState} from 'react'

export const Homepage = () => {
	const [user, setUser] = useState();
	useEffect(() => {
		  fetch("http://127.0.0.1:8000/api/v1/users/65747a5c7415714650c5e421")
		  	.then(data => data.json())
			.then(dt => setUser(dt.data.user))
			.catch (error =>  console.error('Error fetching data:', error));
	}, []);
	if (user) {
		console.log(user);
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
							<h2>Current Balance: {user.sold}$</h2>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<LastTransactions transactions={user.transactions} length={3}/>
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
	}
	else {
		return <p>Loading...</p>
	}
};

