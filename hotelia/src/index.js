import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import INICIO from './pages/Inicio';
import REGISTRO from './pages/Registro';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<INICIO />}/>
      <Route path="/registro" element={<REGISTRO />}/>
      <Route path="/inicio" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      
    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
