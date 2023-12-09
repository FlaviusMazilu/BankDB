import { CardActionArea, Grid } from "@mui/material";
import "./styles/TransactionItem.css";
// import { useNavigate } from "react-router";

export const TransactionItem = ({sender, receiver, amount}) => {

  // const navigate = useNavigate();

  return (
    <CardActionArea onClick={() => {
      // navigate("/stats/" + songId);
    }}>
      <Grid item xs={12} style={{ padding: "10px" }}>
      <div className="t-container">
        <img src="./right-arrow.svg" alt="Your SVG Icon" className="right-arrow"></img>
        <div className="sender">{sender}</div>
        <div className="receiver">{receiver}</div>
        <div className="amount">{amount} </div>
      </div>
      </Grid>
      
    </CardActionArea>
  );
};
