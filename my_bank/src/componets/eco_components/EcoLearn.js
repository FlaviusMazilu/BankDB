import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import EcoNavBar from './EcoNavBar';
import NavBar from '../NavBar';

const EcoLearn = () => {
	return (
		<div>
			<EcoNavBar />
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2">
						Useful Information about Ecology
					</Typography>
					<Typography variant="body2" component="p">
						Insert your useful information here...
					</Typography>
				</CardContent>
			</Card>
			<NavBar />
		</div>
	);
};

export default EcoLearn;
