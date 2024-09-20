import { formatDate, formatTime } from '../util/format';

export const cityFetch = async (city) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${city}&format=json&addressdetails=1&limit=1`
    );
    if (!response.ok) throw new Error('Something wrong in getting City');
    const data = await response.json();
    if (!data.length) return null;
    return {
      city: data[0].display_name.split(',')[0],
      lat: data[0].lat,
      lon: data[0].lon,
    };
  } catch {
    return null;
  }
};

export const weatherFetch = async ({ lat, lon }) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`
    );
    if (!response.ok) throw new Error('Something wrong in getting weather');
    const data = await response.json();
    return {
      image: data.weather[0].icon,
      temp: Math.round(data.main.temp),
      description: data.weather[0].description,
      feelsLike: Math.round(data.main.feels_like),
      humidity: Math.round(data.main.humidity),
      pressure: Math.round(data.main.pressure / 1.33322),
      visibility: Math.round((data.visibility / 1000) * 10) / 10,
      windSpeed: Math.round(data.wind.speed),
      windDeg: data.wind.deg,
    };
  } catch {
    return null;
  }
};

export const forecastFetch = async ({ lat, lon }) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`
    );
    if (!response.ok) throw new Error('Something wrong in getting forecast');
    const data = await response.json();
    let day = new Date(Date.now()).getDate();
    const weekForecast = data.list
      .filter((item) => {
        const itemDay = new Date(item.dt * 1000).getDate();
        if (day === itemDay) return false;
        day = itemDay;
        return true;
      })
      .map((item) => {
        const image = item.weather[0].icon.split('');
        image[2] = 'd';
        return {
          date: formatDate(new Date(item.dt * 1000)),
          image: image.join(''),
          tempMax: Math.round(item.main.temp_max),
          tempMin: Math.round(item.main.temp_min),
        };
      });
    weekForecast[0].date = 'Завтра';

    const hourForecast = data.list.slice(0, 12).map((item) => ({
      date: formatTime(new Date(item.dt * 1000)),
      image: item.weather[0].icon,
      tempMax: Math.round(item.main.temp_max),
    }));

    return { weekForecast, hourForecast };
  } catch {
    return null;
  }
};
