import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import EcoNavBar from './EcoNavBar';
import NavBar from '../NavBar';
const EcoScore = () => {
	

	// Assuming you have access to the current user's eco points
	const currentUserEcoPoints = 500; // Replace with actual value

	// Assuming you have access to the leaderboard data
	const leaderboardData = [
		{ name: 'User 1', ecoPoints: 1000 },
		{ name: 'User 2', ecoPoints: 800 },
		{ name: 'User 3', ecoPoints: 700 },
		...Array.from({ length: 100 }, (_, index) => ({
			name: `User ${index + 4}`,
			ecoPoints: Math.floor(Math.random() * 1000) + 1
		})),
	];

	return (
		<div style={{backgroundColor:'rgba(150, 200, 150, 1)', height:'100vh'}}>
			<EcoNavBar />
			<Typography variant="h4" style={{ textAlign: 'center' }}>Your Eco Points: {currentUserEcoPoints}</Typography>

			<Paper style={{backgroundColor:'rgba(150, 200, 150, 1)', maxHeight: "80vh", overflow: 'auto', justifyContent: 'center'}}>
				<List>
					<Typography variant="h6" align="center">Leaderboard</Typography>
					{leaderboardData.map((user, index) => (
						<ListItem key={index}>
							<ListItem key={index} alignItems="center">
								<ListItemText primary={`${index + 1}. ${user.name}`} />
								<Typography variant="body2" style={{ marginLeft: 'auto' }}>{user.ecoPoints}</Typography>
							</ListItem>
						</ListItem>
					))}
				</List>
			</Paper>
			<NavBar />
		</div>
	);
};

export default EcoScore;
