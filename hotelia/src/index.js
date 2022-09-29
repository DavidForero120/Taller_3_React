import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard';

import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
  <Routes>
    <Route path='/' element={<Dashboard />}></Route>
  </Routes>
</BrowserRouter>
);
reportWebVitals();
