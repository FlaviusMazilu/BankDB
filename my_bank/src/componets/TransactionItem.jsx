import { CardActionArea, Grid } from "@mui/material";
import "../styles/TransactionItem.css";
// import { useNavigate } from "react-router";

export const TransactionItem = ({sender, receiver, amount}) => {

  // const navigate = useNavigate();

  return (
    <CardActionArea onClick={() => {
      // navigate("/stats/" + songId);
    }}>
      <Grid item xs={12} style={{ padding: "10px" }}>
        <div className="sender">{sender}</div>
        <div className="receiver">{receiver}</div>
        <div className="amount">{amount} </div>
      </Grid>
    </CardActionArea>
  );
};
