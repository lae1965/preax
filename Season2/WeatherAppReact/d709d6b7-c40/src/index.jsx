import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/main.css";
import App from './App';
import { WeatherProvider } from './providers/weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>
);
