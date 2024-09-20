const KEY = process.env.REACT_APP_WEATHER_API_KEY

export const getWeatherData = async (activeCity) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${activeCity.lat}&lon=${activeCity.lon}&appid=${KEY}&units=metric&lang=ru`);
    if (!response.ok) {
      throw new Error('Ошибка загрузки данных, повторите попытку')
    }
    const data = await response.json();
    const description = data.weather[0].description;
    return {
      icon: `${data.weather[0].icon.slice(0, -1)}d`,
      temperature: Math.round(data.main.temp),
      description: description.charAt(0).toUpperCase() + description.slice(1),
      feelsLike: Math.round(data.main.feels_like),
      humidity: Math.round(data.main.humidity),
      pressure: Math.round(data.main.pressure / 1.33322),
      visibility: data.visibility ? Math.round((data.visibility / 1000) * 10) / 10 : 0,
      windSpeed: Math.round(data.wind.speed),
      windAngle: data.wind.deg,
      sunrise: data.sys.sunrise * 1000,
      sunset: data.sys.sunset * 1000,
      date: data.dt * 1000,
    };
  } catch (error) {
    console.log('Отсутствует связь со сторонним сервисом', error.message)
  }
}