// src/pages/TransactionsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const TransactionsPage = () => {
  const transactions = [
    { id: 1, description: 'Purchase 1', amount: -50 },
    { id: 2, description: 'Deposit', amount: 100 },
    { id: 3, description: 'Purchase 2', amount: -30 },
  ];

  return (
    <div className="page">
      <h2>Transactions</h2>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction">
          <p>{transaction.description}</p>
          <p>{transaction.amount}</p>
        </div>
      ))}
      <Link to="/" className="back-button">
        Back
      </Link>
    </div>
  );
};

export default TransactionsPage;
