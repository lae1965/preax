import { useState } from 'react';
import { ActiveCityContext } from '../context/ActiveCityContext';

export function ActiveCityProvider({ children, ...props }) {
  const [activeCity, setActiveCity] = useState(null);

  const resetActiveCity = () => {
    setActiveCity(null);
  };

  const changeActiveCity = (city) => {
    setActiveCity(city);
  };

  return (
    <ActiveCityContext.Provider
      value={{ activeCity, changeActiveCity, resetActiveCity, setActiveCity }}
      {...props}
    >
      {children}
    </ActiveCityContext.Provider>
  );
}
