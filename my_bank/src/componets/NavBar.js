import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

let curr_butt = 0;

const NavBar = () => {
	const [value, setValue] = React.useState(curr_butt);
	return (
		<BottomNavigation
			style={{ display:'flex', justifyContent:'center', position: 'absolute', width:'100vw',  bottom: '0vw', backgroundColor: "gray"}}
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