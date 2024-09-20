import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ActiveCityProvider, CitiesPoolProvider, WeatherProvider } from './provider';

import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ActiveCityProvider>
    <CitiesPoolProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </CitiesPoolProvider>
  </ActiveCityProvider>
  // </React.StrictMode>
);

