import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import EcoNavBar from './EcoNavBar';
import NavBar from '../NavBar';
import {Link} from '@mui/material';

const EcoLearn = () => {
	return (
		<div style={{backgroundColor:'rgba(150, 200, 150, 1)', height:"100vh"}}>
			<EcoNavBar />
			<p style={{textAlign:'justify', marginLeft:'5vw', marginRight:'5vw' }}>
			Maintaining a healthy environment is crucial for the well-being of both humanity and the planet. The delicate balance of ecosystems supports diverse forms of life and ensures the provision of essential resources for our survival. A clean and sustainable environment is fundamental for clean air, water, and soil, contributing to improved public health and the preservation of biodiversity. In the face of global challenges such as climate change, deforestation, and pollution, it becomes imperative for individuals to be informed and engaged in efforts that promote environmental conservation. The following websites serve as valuable resources, offering insights into the importance of ecological balance and providing practical guidance on how each person can play a role in fostering a healthier and more sustainable world. Explore these platforms to discover information on conservation initiatives, endangered species, and actionable steps for a positive environmental impact.
			</p>
			
			<ul style={{listStyle:'inside'}}>
				<li><a href='worldwildlife.org'>World Wildlife Fund (WWF)</a></li>
				<li><a href='https://www.epa.gov/'>Environmental Protection Agency (EPA)</a></li>
				<li><a href='https://www.nationalgeographic.com/environment/'>WNational Geographic - Environment</a></li>
				<li><a href='https://www.greenpeace.org/'>Greenpeace</a></li>
				<li><a href='https://www.nature.org/'>WThe Nature Conservancy</a></li>

			</ul>
			<NavBar />
		</div>
	);
};

export default EcoLearn;
