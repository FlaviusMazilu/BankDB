import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return <Grid item xs={12}>
		<Paper variant='outlined'>
			{/* Navigation bar */}
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/transactions">Transactions</Link></li>
					<li><Link to="/cashback">Cashback</Link></li>
					<li><Link to="/eco">Eco Features</Link></li>
				</ul>
			</nav>
		</Paper>
	</Grid>
}

export default NavBar;