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
				<Grid container spacing={0} justifyContent="center" alignItems="center" style={{borderBottom:'none'}}>
					<Grid backgroundColor='rgba(0, 0, 0, 0.7)'  item xs={12} >
						<Paper  variant='elevation' style={{borderBottom:'none'}}>
							{/* Welcome section */}
							<h1 style={{ textAlign: 'center', background:'rgba(0, 0, 0, 0.7)' }}>Welcome, {user.name}!</h1>
						</Paper>
					</Grid>
					<Grid container item xs={12} spacing={0} style={{backgroundColor:'#6EFF14', marginLeft:"5vw", marginTop:"2vh", marginRight:'5vw', borderRadius:"10px" }}>
						<Grid item xs={12} container justifyContent="center" alignItems="center">
							<h3>Current Balance:</h3>
						</Grid>
						<Grid item xs={12} container justifyContent="center" alignItems="center">
							<h1> {user.sold} </h1>
						</Grid>
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

