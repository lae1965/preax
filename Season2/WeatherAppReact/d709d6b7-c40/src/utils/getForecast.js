export const getForecast = (forecastList, curDate) => {
  const hourly = forecastList.slice(0, 8).map(item => (
    {
      time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      img: item.weather[0].icon,
      temp: `${Math.round(item.main.temp)}°`,
    }
  ));

  const forecastCountInDay = 8;
  const curDay = new Date(curDate * 1000).getDate();
  const newDateIndex = forecastList.findIndex(item => new Date(item.dt * 1000).getDate() !== curDay);
  const weekForecastList = forecastList.slice(newDateIndex);

  const week = (Array.from({ length: Math.ceil(weekForecastList.length / forecastCountInDay) }, (_, i) =>
    weekForecastList.slice(i * forecastCountInDay, i * forecastCountInDay + forecastCountInDay)).map(day => {
      let maxTemperature = -1000;
      let minTemperature = 1000;
      day.forEach(item => {
        if (item.main.temp > maxTemperature) maxTemperature = item.main.temp;
        if (item.main.temp < minTemperature) minTemperature = item.main.temp;
      })
      return {
        date: new Date(day[0].dt * 1000).toLocaleDateString('ru-RU', {
          weekday: 'short',
          day: '2-digit',
          month: 'short'
        }),
        img: day[0].weather[0].icon,
        temp: `от ${Math.round(minTemperature)}° до ${Math.round(maxTemperature)}°`,
      }
    })
  );

  return {
    hourly,
    week,
  }
}
