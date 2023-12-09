import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

let curr_butt = 0;

const NavBar = () => {
	const [value, setValue] = React.useState(curr_butt);
	return (
		// <Grid item xs={12}>
		// 	<Paper variant='outlined'>
		// 		{/* Navigation bar */}
		// 		<nav style={{ position: 'absolute',  left:'10vw', bottom: '5vw', backgroundColor: 'black', width: '80vw' }}>
		// 			<ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', listStyleType: 'none' }}>
		// 				<li><Button style={{display: 'flex'}} component={Link} to="/">Home</Button></li>
		// 				<li><Button style={{display: 'flex'}} component={Link} to="/transactions">Transactions</Button></li>
		// 				<li><Button style={{display: 'flex'}} component={Link} to="/cashback">Cashback</Button></li>
		// 				<li><Button style={{display: 'flex'}} component={Link} to="/eco">Go Eco</Button></li>
		// 			</ul>
		// 		</nav>
		// 	</Paper>
		// </Grid>
		

		<BottomNavigation
			style={{ display:'flex', justifyContent:'center', position: 'absolute', width:'100vw',  bottom: '5vw', backgroundColor: "gray"}}
			showLabels
        	value={value}
        	onChange={(event, newValue) => {
				console.log(newValue);
			curr_butt = newValue;
          	setValue(newValue);
        }}>
			<BottomNavigationAction style={{position:'relative', width: "30vw"}} label={"Home"} component={Link} to="/" />
			<BottomNavigationAction style={{position:'relative', width: "30vw"}} label={"Transactions"} component={Link} to="/transactions" />
			<BottomNavigationAction style={{position:'relative', width: "30vw"}} label={"Go Eco"} component={Link} to="/eco" />
		</BottomNavigation>
	);
}

export default NavBar;