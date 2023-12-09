import NavBar from "../NavBar";
import EcoNavBar from "./EcoNavBar";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const Recycle = () => {
	return (
		<div>
			<EcoNavBar />
			<p  style={{textAlign:'justify', marginLeft:'5vw', marginRight:'5vw' }}>You can recycle materials in exchange for curency. You just have to fill up your (recyclable) bags with paper, plastic, old clothes or broken electronics and come to one of our recycling centers. <a href='https://www.google.com/'>Here</a> is a complete list of centers where you can contribute to a healthier environment!</p>
			<h1 style={{textAlign:'center'}}>Scan this QR:</h1>
			<div style={{display:'flex', justifyContent:'center'}}>
				<QRCode value="userID" style={{alignSelf:'center'}}></QRCode>	
			</div>
			<NavBar />
		</div>
	);
};

export default Recycle;