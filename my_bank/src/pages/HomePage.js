// src/pages/HomePage.js
import React from 'react';
import BalanceBox from '../components/BalanceBox';
import TransactionBox from '../components/TransactionBox';
import NewsBox from '../components/NewsBox';

const HomePage = () => {
  return (
    <div className="home-page">
      <BalanceBox balance={1000} />
      <TransactionBox />
      <NewsBox />
    </div>
  );
};

export default HomePage;
