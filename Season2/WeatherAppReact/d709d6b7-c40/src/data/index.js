import humidity from "../assets/img/humidity.svg";
import barometr from "../assets/img/barometr.svg";
import visibility from "../assets/img/visibility.svg";
import sunrise from "../assets/img/sunrise.svg";
import sunset from "../assets/img/sunset.svg";
import direction from "../assets/img/direction.svg";

export const current = {
  city: "Москва",
  date: "Суббота, 06 июня",
  description: "Ясно",
  temperature: 17,
  feelsLike: 10,
  time: "11:29",
  iconUrl: `http://openweathermap.org/img/wn/01d.png`,
};

export const details = [
  {
    title: "Влажность",
    img: humidity,
    value: 75,
    pbValue: 62.7,
    units: "%",
    min: 0,
    max: 100,
  },
  {
    title: "Давление",
    img: barometr,
    value: 761,
    pbValue: 76.2,
    gradientPb: true,
    description: "Повышенное",
  },
  {
    title: "Видимость",
    img: visibility,
    value: 28,
    pbValue: 24.6,
    units: "км",
    description: "Нормальная",
  },
  {
    title: "Рассвет",
    img: sunrise,
    value: "8:42",
    description: "Прошло: 02:47",
  },
  {
    title: "Закат",
    img: sunset,
    value: "16:37",
    description: "Осталось: 05:08",
  },
  {
    title: "Сила ветра",
    img: direction,
    value: 2,
    units: "м/с",
    description: "Северо-западный",
  },
];

export const mockForecast = {
  hourly: [
    {
      time: "12:00",
      img: '02d',
      temp: "-7°",
      description: "облачно",
    },
    {
      time: "15:00",
      img: '02d',
      temp: "-5°",
      description: "облачно",
    },
    {
      time: "18:00",
      img: '02d',
      temp: "-7°",
      description: "облачно",
    },
    {
      time: "21:00",
      img: '02d',
      temp: "-9°",
      description: "облачно",
    },
    {
      time: "00:00",
      img: '02d',
      temp: "-11°",
      description: "облачно",
    },
    {
      time: "03:00",
      img: '02d',
      temp: "-13°",
      description: "облачно",
    },
    {
      time: "06:00",
      img: '02d',
      temp: "-15°",
      description: "облачно",
    },
    {
      time: "09:00",
      img: '02d',
      temp: "-17°",
      description: "облачно",
    },
  ],
  week: [
    {
      date: "Вс, 07 янв.",
      img: '04d',
      temp: "от -17° до -11°",
      description: "переменная облачность",
    },
    {
      date: "Пн, 08 янв.",
      img: '04d',
      temp: "от -16° до -8°",
      description: "переменная облачность",
    },
    {
      date: "Вт, 09 янв.",
      img: '02d',
      temp: "от -8° до -2°",
      description: "облачно",
    },
    {
      date: "Ср, 10 янв.",
      img: '02d',
      temp: "от -2° до 1°",
      description: "облачно",
    },
    {
      date: "Чт, 11 янв.",
      img: '02d',
      temp: "от -2° до 1°",
      description: "облачно",
    },
  ],
};
