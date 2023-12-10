import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

let curr_butt = 0;

const EcoNavBar = () => {
	const [value, setValue] = React.useState(curr_butt);
	return (
		<BottomNavigation
			style={{ display:'flex', justifyContent:'center', position: 'relative', width:'100vw',  top: '0', backgroundColor:'#262522'}}
			showLabels
        	value={value}
        	onChange={(event, newValue) => {
				console.log(newValue);
			curr_butt = newValue;
          	setValue(newValue);
        }}>
			<BottomNavigationAction style={{position:'relative', width: "25vw", color: curr_butt == 0? "#4d9c44" : "white"}} label={"Eco Score"} component={Link} to="/eco/score" />
			<BottomNavigationAction style={{position:'relative', width: "25vw", color: curr_butt == 1? "#4d9c44" : "white"}} label={"Plant a tree"} component={Link} to="/eco/plant" />
			<BottomNavigationAction style={{position:'relative', width: "25vw", color: curr_butt == 2? "#4d9c44" : "white"}} label={"Recycle"} component={Link} to="/eco/recycle" />
			<BottomNavigationAction style={{position:'relative', width: "25vw", color: curr_butt == 3? "#4d9c44" : "white"}} label={"Learn"} component={Link} to="/eco/learn" />
		</BottomNavigation>
	);
};

export default EcoNavBar;