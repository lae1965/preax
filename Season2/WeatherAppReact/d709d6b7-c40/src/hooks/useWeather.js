import { useContext } from "react";
import { WeatherContext } from "../providers/weather";

const useWeather = () => useContext(WeatherContext);

export default useWeather;
