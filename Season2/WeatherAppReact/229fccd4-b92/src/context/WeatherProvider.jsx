import { useState } from 'react';
import WeatherContext from './weatherContext';
import { searchStatus } from '../utils/constants';
import { setCityToList } from '../utils/setCityToList';

const API_KEY = '71566f72957a2e819fa530feb93cdc6c';

export const WeatherProvider = ({ children, ...props }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [statusOfSearch, setStatusOfSearch] = useState(
    searchStatus.isClosedDrop
  );
  const [foundCitiesList, setFoundCitiesList] = useState(
    JSON.parse(localStorage.getItem('cityList240165')) || []
  );

  const getCityByName = async (cityName) => {
    setStatusOfSearch(searchStatus.isLoading);
    try {
      const cityResponse = await fetch(
        `https://nominatim.openstreetmap.org/search.php?q=${cityName}&format=json&addressdetails=1&limit=1`,
        {
          headers: {
            'Accept-Language': 'ru',
          },
        }
      );
      if (!cityResponse?.ok) throw new Error('error');
      const cityData = await cityResponse.json();
      if (cityData.length === 0) {
        setStatusOfSearch(searchStatus.isNotFound);
        return null;
      }

      setStatusOfSearch(searchStatus.isFound);
      return {
        lat: cityData[0].lat,
        lon: cityData[0].lon,
        correctCityName: cityData[0].display_name.split(',')[0],
      };
    } catch (error) {
      console.log(error);
      console.log('Отсутствует связь со сторонним сервисом');
      setStatusOfSearch(searchStatus.isError);
    }
  };

  const getCityWeather = async ({ lat, lon, correctCityName }) => {
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`
      );
      setStatusOfSearch(searchStatus.isClosedDrop);
      if (!weatherResponse?.ok) throw new Error('error');
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData);

      console.log(weatherData);

      setFoundCitiesList(setCityToList(correctCityName, foundCitiesList));
    } catch (error) {
      console.log(error);
      console.log('Отсутствует связь со сторонним сервисом');
      setStatusOfSearch(searchStatus.isError);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        statusOfSearch,
        foundCitiesList,
        getCityByName,
        getCityWeather,
        setStatusOfSearch,
        setFoundCitiesList,
      }}
      {...props}
    >
      {children}
    </WeatherContext.Provider>
  );
};
