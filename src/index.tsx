import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EmptyCylinder from './screens/EmptyCylinder'

import WeightCylinder from './screens/WeightCylinder'
import ConditionCylinder from './screens/ConditionCylinder'
import SizeCylinder from './screens/SizeCylinder'
import ConfirmPay from './screens/ConfirmPay'

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/empty"  element={<EmptyCylinder />} />
      <Route path="/weight"  element={<WeightCylinder />} />
      <Route path="/condition"  element={<ConditionCylinder />} />
      <Route path="/size"  element={<SizeCylinder />} />
      <Route path="/confirmPay"  element={<ConfirmPay />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
