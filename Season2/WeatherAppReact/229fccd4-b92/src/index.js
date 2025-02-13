import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';

import App from './App';
import { WeatherProvider } from './context/WeatherProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>
);
