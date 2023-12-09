import { Grid } from "@mui/material";
import "../styles/LastTransactions.css";
import { TransactionItem } from "./TransactionItem.jsx";
import { useEffect, useState } from "react";

const LastTransactions = ({ length = -1 }) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    try {
      fetch("http://127.0.0.1:8000/api/v1/65747a5c7415714650c5e421").then(data => data.json()).then(trans => { setTransactions(trans.data.transactions); console.log(1); });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    if (length == -1)
      length = transactions.length;
  }, []);
  return (
    <Grid container className="transactions-container">
      {transactions.slice(0, length).map((transaction, index) =>
        index !== transaction.length - 1 ? (
          <>
            <TransactionItem
              sender={transaction.sender}
              receiver={transaction.receiver}
              amount={transaction.amount}
            />
            <Grid item xs={12}>
              <hr className="rounded" />
            </Grid>
          </>
        ) : (
          <TransactionItem
            title={transaction.sender}
            author={transaction.receiver}
            score={transaction.amount}
          />
        )
      )}
    </Grid>
  );
};
export default LastTransactions;