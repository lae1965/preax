import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import { FilterProvider } from './context/FilterProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FilterProvider>
    <App />
  </FilterProvider>
);
