import React, { useEffect, useState } from 'react';
import { CitiesPoolContext } from '../context/CitiesPoolContext';

const storage = {
  setItem: (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
  },
  getItem: (name) => {
    const item = localStorage.getItem(name);
    if (item) {
      return JSON.parse(item);
    }
  },
};

export function CitiesPoolProvider({ children, ...props }) {

  const [cities, setCities] = useState(storage.getItem('cities-pool') || [])

  const checkInCityPool = (value) => {
    return cities.find(city => {
      return (city.valueCity === value || city.apiCity === value)
    }) ?? false
  }

  const changeCitiesPool = (city) => {
    if (checkInCityPool(city.apiCity)) return
    setCities(cities.length > 4 ? [city, ...cities].slice(0, 5) : [city, ...cities]);
  }

  const resetCitiesPool = () => {
    setCities([])
  }

  useEffect(() => {
    localStorage.setItem('cities-pool', JSON.stringify(cities));
  }, [cities])

  return (
    <CitiesPoolContext.Provider value={{ cities, changeCitiesPool, resetCitiesPool }} {...props}>
      {children}
    </CitiesPoolContext.Provider>
  )
}
