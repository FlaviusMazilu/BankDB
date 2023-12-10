import { CardActionArea, Grid } from "@mui/material";
import "./styles/TransactionItem.css";
import { useNavigate } from "react-router";

export const TransactionItem = ({sender, receiver, amount, date}) => {

  const navigate = useNavigate();
  // console.log(date);
  const dateObject = new Date(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return (
    <CardActionArea className="hover-effect-card" onClick={() => {
      navigate("/transactions");
    }}>
      <Grid item xs={12} style={{ padding: "10px" }}>
      <div className="t-container">
        {(receiver == "YOU") ? 
          [<img src="./left-arrow.svg" alt="Your SVG Icon" className="right-arrow"></img>,
            <div className="sender">{sender}</div>,
            <div className="amount-negative">- {amount} </div>
            ]:
          [<img src="./right-arrow.svg" alt="Your SVG Icon" className="left-arrow"></img>,
            <div className="sender">{receiver}</div>,
            <div className="amount-positive">+ {amount} </div>]
          }
      </div>
      <div className="receiver">{formattedDate}</div>
      </Grid>
      
    </CardActionArea>
  );
};
