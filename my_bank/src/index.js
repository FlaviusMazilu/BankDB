import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Homepage from './componets/Homepage.js';
import Transactions from './componets/Transactions.js';
import Cashback from './componets/Cashback.js';
import EcoFeatures from './componets/EcoFeatures.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/cashback",
    element: <Cashback />,
  },
  {
    path: "/eco",
    element: <EcoFeatures />,
  },
]);


root.render(
  <RouterProvider router={router}/>    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
