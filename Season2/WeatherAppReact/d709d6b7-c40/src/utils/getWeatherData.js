import humidityIcon from "../assets/img/humidity.svg";
import barometrIcon from "../assets/img/barometr.svg";
import visibilityIcon from "../assets/img/visibility.svg";
import sunriseIcon from "../assets/img/sunrise.svg";
import sunsetIcon from "../assets/img/sunset.svg";
import directionIcon from "../assets/img/direction.svg";

export const directions = [
  "Северный",
  "Северо-восточный",
  "Восточный",
  "Юго-восточный",
  "Южный",
  "Юго-западный",
  "Западный",
  "Северо-западный",
];

export const getWeatherData = (weatherData) => {
  const { main, visibility, wind, sys, dt, weather } = weatherData;

  const convertPressure = (x) => Math.round(x * 0.750062);
  const getWindDirection = (deg) => directions[Math.round(deg / 45) % 8];

  const timeFromNow = (time) => {
    const dateNow = new Date(dt * 1000);
    const dateTime = new Date(time * 1000);
    const diff = dateNow.getTime() - dateTime.getTime();
    const sign = diff > 0 ? "Прошло" : "Осталось";
    const absDiff = Math.abs(diff);
    const hours = Math.floor(absDiff / (1000 * 60 * 60));
    const minutes = Math.floor((absDiff / (1000 * 60)) % 60);
    return `${sign}: ${hours}:${minutes.toString().padStart(2, "0")}`;
  };

  const formatTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    return `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  const utcDate = new Date(weatherData.dt * 1000);
  const localDate = new Date(utcDate.getTime() + weatherData.timezone * 1000);

  const date = localDate.toLocaleString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  });

  const capitalizedDate = date[0].toUpperCase() + date.slice(1);
  const capitalizedDescription =
    weatherData.weather[0].description[0].toUpperCase() +
    weatherData.weather[0].description.slice(1);

  const timeString = localDate.toLocaleString("ru-RU", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  });

  const current = {
    city: weatherData.name,
    date: capitalizedDate,
    time: timeString,
    description: capitalizedDescription,
    temperature: Math.floor(main.temp),
    feelsLike: Math.floor(main.feels_like),
    iconUrl: `http://openweathermap.org/img/wn/${weather[0].icon}.png`,
  };

  const details = [
    {
      title: "Влажность",
      img: humidityIcon,
      value: main.humidity,
      pbValue: (main.humidity * 100) / 100,
      units: "%",
      min: 0,
      max: 100,
    },
    {
      title: "Давление",
      img: barometrIcon,
      value: convertPressure(main.pressure),
      pbValue: ((convertPressure(main.pressure) - 700) / (800 - 700)) * 100,
      gradientPb: true,
      description:
        convertPressure(main.pressure) >= 740 &&
          convertPressure(main.pressure) <= 760
          ? "Нормальное"
          : convertPressure(main.pressure) < 740
            ? "Пониженное"
            : "Повышенное",
    },
    {
      title: "Видимость",
      img: visibilityIcon,
      value: visibility / 1000,
      pbValue: (visibility / 1000) * 10,
      units: "км",
      description: "Нормальная",
    },
    {
      title: "Рассвет",
      img: sunriseIcon,
      value: formatTime(sys.sunrise),
      description: timeFromNow(sys.sunrise),
    },
    {
      title: "Закат",
      img: sunsetIcon,
      value: formatTime(sys.sunset),
      description: timeFromNow(sys.sunset),
    },
    {
      title: "Сила ветра",
      img: directionIcon,
      value: Math.floor(wind.speed),
      units: "м/с",
      description: getWindDirection(wind.deg + 180),
    },
  ];

  return { details, current };
};
