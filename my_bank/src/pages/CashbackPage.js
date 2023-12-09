// CashbackPage.js
import React from 'react';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';

const CashbackPage = () => {
  // Mock cashback data
  const stores = [
    { id: 1, name: 'Store 1', cashback: 5, isGreen: false },
    { id: 2, name: 'Store 2', cashback: 10, isGreen: true },
    { id: 3, name: 'Store 3', cashback: 8, isGreen: false },
    // ... more stores
  ];

  return (
    <div className="page">
      <h2>Cashback</h2>
      {stores.map((store) => (
        <div key={store.id} className={`store ${store.isGreen ? 'green-store' : ''}`}>
          <p>{store.name}</p>
          <p>{store.cashback}% Cashback</p>
        </div>
      ))}
      <Link to="/" className="back-button">
        Back
      </Link>
    </div>
  );
};

export default CashbackPage;
