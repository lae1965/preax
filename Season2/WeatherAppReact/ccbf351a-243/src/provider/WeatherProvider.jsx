import { useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export function WeatherProvider({ children, ...props }) {
  const [weather, setWeather] = useState(null);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }} {...props}>
      {children}
    </WeatherContext.Provider>
  );
}
