// src/components/TransactionBox.js
import React from 'react';

const TransactionBox = () => {
  const transactions = [
    { id: 1, description: 'Purchase 1', amount: -50 },
    { id: 2, description: 'Deposit', amount: 100 },
    { id: 3, description: 'Purchase 2', amount: -30 },
  ];

  return (
    <div className="transaction-box">
      <h2>Last 3 Transactions</h2>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction">
          <p>{transaction.description}</p>
          <p>{transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionBox;
