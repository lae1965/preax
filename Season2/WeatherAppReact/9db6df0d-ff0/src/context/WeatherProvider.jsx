import { useState } from 'react';
import WeatherContext from './weatherContext';
import { searchStatus } from '../utils/constants';
import { setCityToList } from '../utils/setCityToList';
import { getTimeDate } from '../utils';

const API_KEY = '71566f72957a2e819fa530feb93cdc6c';

export const WeatherProvider = ({ children, ...props }) => {
  const [weatherMain, setWeatherMain] = useState(null);
  const [weatherCard, setWeatherCard] = useState(null);
  const [loadingWeatherItems, setLoadingWeatherItems] = useState(false);
  const [weatherHours, setWeatherHours] = useState(null);
  const [weatherDays, setWeatherDays] = useState(null);
  const [statusOfSearch, setStatusOfSearch] = useState(
    searchStatus.isClosedDrop
  );
  const [foundCitiesList, setFoundCitiesList] = useState(
    JSON.parse(localStorage.getItem('cityListv5')) || []
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
      setWeatherMain({
        name: weatherData.name,
        date: weatherData.dt,
        id: weatherData.id,
        temp: weatherData.main.temp,
        temp_feels: weatherData.main.feels_like,
        weather_descr: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        timezone: weatherData.timezone,
        lat: lat,
        lon: lon
      })
      setWeatherCard({
        pressure: weatherData.main.pressure,
        humidity: weatherData.main.humidity,
        visibility: weatherData.visibility,
        wind: {
          speed: weatherData.wind.speed,
          deg: weatherData.wind.deg
        },
        sunset: weatherData.sys.sunset,
        sunrise: weatherData.sys.sunrise,
        timezone: weatherData.timezone,

      })

      setFoundCitiesList(setCityToList(correctCityName, foundCitiesList));
    } catch (error) {
      console.log(error);
      console.log('Отсутствует связь со сторонним сервисом');
      setStatusOfSearch(searchStatus.isError);
    }
  };


  const getWeatherItems = async ({lat, lon}) => {

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`
      );

      if (!response?.ok) throw new Error('error');
      const weatherData = await response.json();
      
      const hours = weatherData.list.slice(0, 8);
      const parseHours = [];
      const parseDays = [];
      const days = {};

      weatherData.list.map(el=>{

        const date = new Date(el.dt_txt);
        const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

        const curTemp = {
          date: el.dt,
          icon: el.weather[0].icon,
          minTemp: el.main.temp_min,
          maxTemp: el.main.temp_max
        };

        if(!days[key]) {
          days[key] = curTemp;
        }
        else {

          if(curTemp.minTemp < days[key].minTemp) {
            days[key].minTemp = curTemp.minTemp;
          }

          if(curTemp.maxTemp > days[key].maxTemp) {
            days[key].maxTemp = curTemp.maxTemp;
          }
        }
      });
    


      for (const key in days) {
        if (Object.hasOwnProperty.call(days, key)) {
          const element = days[key];
          const date = new Date(element.date * 1000).toLocaleDateString('ru-RU', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
          });

          parseDays.push({
            time: date,
            icon: element.icon,
            minTemp: `${Math.round(element.minTemp)}°`,
            maxTemp: `${Math.round(element.maxTemp)}°`,
          });
        }
      }

      hours.map(el=>{
        parseHours.push({
          time: getTimeDate(el.dt),
          icon: el.weather[0].icon,
          temp: `${Math.round(el.main.temp)}°`,
        });
      });
      
      setWeatherHours(parseHours);
      setWeatherDays(parseDays);
    }catch (error) {
      console.log('Отсутствует связь со сторонним сервисом');
    } finally {
      setLoadingWeatherItems (false);
    }
    
  }
  
  
  return (
    <WeatherContext.Provider
      value={{
        weatherHours,
        weatherDays,
        loadingWeatherItems,
        weatherMain,
        getWeatherItems,
        weatherCard,
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
