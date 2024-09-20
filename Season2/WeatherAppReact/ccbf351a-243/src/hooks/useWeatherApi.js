import { useEffect } from "react";
import { getWeatherData } from "../api";
import { useActiveCity } from "./useActiveCity";
import { useWeather } from "./useWeather";

export function useWeatherApi() {
  const { activeCity } = useActiveCity();
  const { setWeather } = useWeather();


  useEffect(() => {
    const fetchWeather = async () => {
      if (activeCity) {
        setWeather(await getWeatherData(activeCity));
      }
    };
    fetchWeather();
  }, [activeCity, setWeather]);
};