import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {Homepage} from './componets/Homepage.js';
import Transactions from './componets/Transactions.js';
import Cashback from './componets/Cashback.js';
import News from './componets/News.js';
import EcoScore from './componets/eco_components/EcoScore.js';
import PlantTree from './componets/eco_components/PlantTree.js';
import Recycle from './componets/eco_components/Recycle.js';
import EcoLearn from './componets/eco_components/EcoLearn.js';

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
    element: <EcoScore />,
  },
  {
    path: "/news",
    element: <News />,
  },
  { path: "eco/score",
    element: <EcoScore />, 
  },
  { path: "eco/plant",
    element: <PlantTree />, 
  },
  { path: "eco/recycle",
    element: <Recycle />, 
  },
  { 
    path: "eco/learn",
    element: <EcoLearn />, 
  },
]);


root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
