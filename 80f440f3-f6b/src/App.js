import { useState } from 'react';

import './assets/styles/main.css';
import './assets/styles/media-main.css';
import { City } from './Components/City';
import { Forecast } from './Components/Forecast';
import {
  CityContext,
  ForecastContext,
  LoadingContext,
  WeatherContext,
} from './util/context';

export const App = () => {
  const [activeIndex, setActiveIndex] = useState(
    +localStorage.getItem(
      `activeCity${process.env.REACT_APP_STORAGE_POSTFIX}`
    ) || 0
  );
  const [cityList, setCityList] = useState(
    JSON.parse(
      localStorage.getItem(`cities${process.env.REACT_APP_STORAGE_POSTFIX}`)
    ) || [{ city: 'Москва', lat: '55.7504461', lon: '37.6174943' }]
  );
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [weekForecast, setWeekForecast] = useState([]);
  const [hourForecast, setHourForecast] = useState([]);

  return (
    <CityContext.Provider
      value={{ cityList, setCityList, activeIndex, setActiveIndex }}
    >
      <WeatherContext.Provider
        value={{
          weather,
          setWeather,
        }}
      >
        <ForecastContext.Provider
          value={{
            weekForecast,
            setWeekForecast,
            hourForecast,
            setHourForecast,
          }}
        >
          <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <City />
            <Forecast />
          </LoadingContext.Provider>
        </ForecastContext.Provider>
      </WeatherContext.Provider>
    </CityContext.Provider>
  );
};
