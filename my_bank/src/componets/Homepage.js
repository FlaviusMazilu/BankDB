import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavBar from './NavBar.js';
import LastTransactions from './LastTransactions';
import {useEffect, useState} from 'react'
import './styles/Widget.css';
import './styles/Homepage.css';
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
		return (
			<div className='main-page'>
				<Grid container spacing={0} justifyContent="center" alignItems="center" style={{borderBottom:'none'}}>
					<Grid item xs={12} className='header-container'>
							{/* Welcome section */}
							<h1 style={{ textAlign: 'center'}}>Welcome, {user.name}!</h1>
					</Grid>
					<Grid container item xs={12} spacing={0} style={{backgroundColor:'#49b344', marginLeft:"5vw", marginTop:"2vh", marginRight:'5vw', borderRadius:"10px" }}>
						<Grid item xs={12} container justifyContent="center" alignItems="center">
							<h3>Current Balance:</h3>
						</Grid>
						<Grid item xs={12} container justifyContent="center" alignItems="center">
							<h1> {user.sold} </h1>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<h3 style={{color:'#ffffffd1', marginLeft:10}}>Last transactions</h3>
						<LastTransactions transactions={user.transactions} length={3}/>
					</Grid>
					<Grid item xs={6} style={{marginTop: 20}}>
						<div className="widget-container">
							<p>News</p>
						</div>
					</Grid>

					<Grid item xs={6} style={{marginTop: 20}}>
						<div className="widget-container">
							<p>Cashback</p>
						</div>
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

