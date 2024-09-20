import { createContext, useEffect, useState } from "react";
import { getWeatherData } from "../utils/getWeatherData";
import { details, current, mockForecast } from "../data";
import { getForecast } from "../utils/getForecast";

export const WeatherContext = createContext({
  cityInfo: undefined,
  data: null,
  reset: () => {},
  lastQueries: [],
  clearHistory: () => {},
  fetchWeather: () => {},
  fetchCity: () => {},
  isLoading: false,
  isPanelOpen: false,
  onPanelOpen: () => {},
  onPanelClose: () => {},
});

export const WeatherProvider = ({ children }) => {
  const error = "Отсутствует связь со сторонним сервисом";
  const fail = "упс...";
  const appKey = "fas4W9WtNylwzdhR";

  const [lastQueries, setLastQueries] = useState([]);
  const [cityInfo, setCityInfo] = useState(undefined);
  const [data, setData] = useState({ details, current });
  const [forecast, setForecast] = useState(mockForecast);
  const [isLoading, setIsLoading] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // useEffect(() => {
  //   if (weatherInfo === null && cityInfo === undefined) {
  //     fetchCity("Москва");
  //   }
  // }, []); Сделать

  useEffect(() => {
    const lsQueries = localStorage.getItem(appKey);
    if (lsQueries) {
      setLastQueries(JSON.parse(lsQueries));
    }
  }, []);

  useEffect(() => {
    document.querySelector(".app").style.overflow = isPanelOpen ? "hidden" : "";
  }, [isPanelOpen]);

  const reset = () => {
    setCityInfo(undefined);
  };

  const onPanelOpen = () => {
    setIsPanelOpen(true);
  };

  const onPanelClose = () => {
    setIsPanelOpen(false);
    reset();
  };

  const fetchWeather = async (city) => {
    if (!city) {
      throw new Error(fail);
    }

    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=ru`
      );
      const weather = await response.json();

      setData(getWeatherData(weather));

      response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=ru`
      );
      const forecast = await response.json();
      setForecast(getForecast(forecast.list, weather.dt));
    } catch (e) {
      console.log(e);
      console.log(error);
    }
  };

  const fetchCity = async (query = "") => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`
      );
      const city = await response.json();

      if (city[0]) {
        const newCityInfo = {
          name:
            city[0].address.city ||
            city[0].address.town ||
            city[0].address.state ||
            city[0].address.province ||
            city[0].display_name,
          lat: city[0].lat,
          lon: city[0].lon,
        };
        setCityInfo(newCityInfo);
        updateHistory(newCityInfo);
      } else {
        setCityInfo(null);
        console.log(fail);
      }
    } catch (e) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateHistory = (newCityInfo) => {
    const updatedHistory = [
      newCityInfo,
      ...lastQueries
        .filter((item) => item.name !== newCityInfo.name)
        .slice(0, 4),
    ];
    localStorage.setItem(appKey, JSON.stringify(updatedHistory));
    setLastQueries(updatedHistory);
  };

  const clearHistory = () => {
    // setData(null);
    localStorage.removeItem(appKey);
    setLastQueries([]);
  };

  return (
    <WeatherContext.Provider
      value={{
        data: { ...data, forecast },
        cityInfo,
        reset,
        lastQueries,
        clearHistory,
        fetchWeather,
        fetchCity,
        isLoading,
        isPanelOpen,
        onPanelOpen,
        onPanelClose,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
