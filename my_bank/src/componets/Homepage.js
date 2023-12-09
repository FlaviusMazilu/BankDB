import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavBar from './NavBar.js';
import LastTransactions from './LastTransactions';
import {useEffect, useState} from 'react'
import './styles/Widget.css';
import { useNavigate } from "react-router";

import { Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
export const Homepage = () => {
	const [user, setUser] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		  fetch("http://127.0.0.1:8000/api/v1/users/6574c8d5ded2894650bea042")
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
							<h2>Current Balance: {user.sold}$</h2>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<h3>Last transactions</h3>
						<LastTransactions transactions={user.transactions} length={3}/>
					</Grid>
					<Grid item xs={6}>
						<CardActionArea className="hover-effect-card" onClick={() => {navigate("/news");}}>
						<div className="widget-container">
							<p>News</p>
						</div>
						</CardActionArea>
					</Grid>

					<Grid item xs={6}>
						<CardActionArea className="hover-effect-card" onClick={() => {navigate("/cashback");}}>
						<div className="widget-container">
							<p>Cashback</p>
						</div>
						</CardActionArea>
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

