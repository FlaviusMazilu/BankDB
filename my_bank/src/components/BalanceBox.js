// src/components/BalanceBox.js
import React from 'react';

const BalanceBox = ({ balance }) => {
  return (
    <div className="balance-box">
      <h2>Your Balance</h2>
      <p>{`$${balance.toFixed(2)}`}</p>
    </div>
  );
};

export default BalanceBox;
