import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/login/login';

import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

const usuario ={
  nombre : "Daniel",
  correo :"daniel@gmail.com"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Dashboard />}></Route>
    <Route path='/usuario' element={<Login />}></Route>
  </Routes>
</BrowserRouter>
);
reportWebVitals();
