import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const NavBar = () => {
	return (
		<Grid item xs={12}>
			<Paper variant='outlined'>
				{/* Navigation bar */}
				<nav style={{ position: 'fixed', bottom: 0, backgroundColor: 'white', width: '100vw' }}>
					<ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', listStyleType: 'none' }}>
						<li><Button component={Link} to="/">Home</Button></li>
						<li><Button component={Link} to="/transactions">Transactions</Button></li>
						<li><Button component={Link} to="/cashback">Cashback</Button></li>
						<li><Button component={Link} to="/eco">Go Eco</Button></li>
					</ul>
				</nav>
			</Paper>
		</Grid>
	);
}

export default NavBar;