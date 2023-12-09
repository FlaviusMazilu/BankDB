import EcoNavBar from "./EcoNavBar";
import NavBar from "../NavBar";
import { Grid, Switch, Typography } from "@mui/material";
import {Paper} from "@mui/material";
import ParkTwoToneIcon from '@mui/icons-material/ParkTwoTone';

const PlantTree = () => {
	return (
		<div>
			<EcoNavBar />
			<Grid container spacing={0} style={{backgroundColor:'rgba(255, 0, 0, 0.3)', marginLeft:"5vw", marginTop:"2vh", width:'90vw', borderRadius:"10px" }}>
				<Grid item xs={8} container justifyContent="flex-start" alignItems="center">
					<h4 style={{marginLeft:'5vw'}}>Round-up and plant a tree!</h4>
				</Grid>
				<Grid item xs={4} container justifyContent="flex-end" alignItems="center">
					<Switch style={{marginRight:'5vw'}}></Switch>
				</Grid>
			</Grid>

			<Grid container spacing={0} style={{backgroundColor:'#6EFF14', marginLeft:"5vw", marginTop:"2vh", width:'90vw', borderRadius:"10px" }}>
				<Grid item xs={12} container justifyContent="center" alignItems="center">
					<h3>Plant a Tree Balance:</h3>
				</Grid>
				<Grid item xs={12} container justifyContent="center" alignItems="center">
					<h1> 123.44 </h1>
				</Grid>
			</Grid>

			<Grid container spacing={0} style={{backgroundColor:'#6E0F14', marginLeft:"5vw", marginTop:"2vh", width:'90vw', borderRadius:"10px" }}>
				<Grid item xs={6} container justifyContent="flex-start" alignItems="center">
					<h3 style={{marginLeft:'5vw'}}>You will plant:</h3>
					
				</Grid>
				<Grid item xs={6} container justifyContent="flex-end" alignItems="center">
					<h2 style={{marginRight:'5vw'}} > 2.34 <ParkTwoToneIcon></ParkTwoToneIcon></h2>
					
				</Grid>
			</Grid>

			<Grid container spacing={0} style={{backgroundColor:'#1E9F14', marginLeft:"5vw", marginTop:"2vh", width:'90vw', borderRadius:"10px" }}>
				<Grid item xs={12} container justifyContent="flex-start" alignItems="center">
					<p justifyContent='justify' style={{textAlign:'justify', marginLeft:'5vw', marginRight:'5vw' }}>Planting a tree has a profound and far-reaching impact on the environment, serving as a powerful catalyst for positive change. Trees play a crucial role in mitigating climate change by absorbing carbon dioxide during photosynthesis and releasing life-enabling oxygen. Beyond their carbon sequestration abilities, trees contribute to biodiversity, providing habitats for countless species. Their extensive root systems help prevent soil erosion and filter pollutants, safeguarding water quality. Additionally, trees act as urban heat sinks, offering shade and reducing the heat island effect in urban areas. The aesthetic value they bring enhances the overall well-being of communities, fostering a connection between people and nature. Overall, the act of planting a tree represents a simple yet impactful gesture with multifaceted benefits, contributing to the health and resilience of the entire ecosystem.
						<a href="https://www.arborday.org/" rel="noreferrer">
    						Read more...
  						</a>
					</p>					 	
				</Grid>
			</Grid>


			<NavBar />
		</div>

	);
};

export default PlantTree;