import {Grid } from "@mui/material";
import "./styles/LastTransactions.css";
import { TransactionItem } from "./TransactionItem";
// import { useEffect, useState } from "react";
import {FaReact} from 'react-icons/fa';
const LastTransactions = ({transactions, length = 0}) => {
  console.log(length);
  console.log(transactions);
  return (
    <Grid container className="transactions-container">
    { !transactions ?
      (<p>Loading</p>) :
        (transactions.slice(0, length).map((transaction, index) =>
          index !== transaction.length - 1 ? (
          <>
            <TransactionItem
              sender={transaction.sender}
              receiver={transaction.receiver}
              amount={transaction.amount}
              date={transaction.date}
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
        ))
    }
    </Grid>
  );
};
export default LastTransactions;