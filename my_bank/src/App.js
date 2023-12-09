// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TransactionsPage from './pages/TransactionsPage';
import NewsPage from './pages/NewsPage';
import GoEcoPage from './pages/GoEcoPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/transactions" component={TransactionsPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/goeco" component={GoEcoPage} />
      </Routes>
    </Router>
  );
};

export default App;
