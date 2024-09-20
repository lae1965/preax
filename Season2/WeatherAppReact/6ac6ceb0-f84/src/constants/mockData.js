export const mockDayData = [
  {
    name: 'Влажность',
    icon: 'humidity',
    value: '75%',
    progressRange: {
      background: 'rgba(218, 218, 218, 0.4)',
      pointPosition: 75
    },
    description: {
      left: '0%',
      right: '100%'
    }
  },
  {
    name: 'Давление',
    icon: 'pressure',
    value: 761,
    progressRange: {
      background: 'radial-gradient(50% 9453.13% at 50% 50%, rgba(84, 84, 84, 0.4) 0%, rgba(138, 138, 138, 0.4) 45.12%, #DADADA 100%, rgba(218, 218, 218, 0.4) 100%)',
      pointPosition: 92
    },
    description: 'Повышенное'
  },
  {
    name: 'Видимость',
    icon: 'visibility',
    value: '28 км',
    progressRange: {
      background: 'rgba(218, 218, 218, 0.4)',
      pointPosition: 27
    },
    description: 'Нормальная'
  },
  {
    name: 'Рассвет',
    icon: 'sunrise',
    value: '8:42',
    description: 'Прошло: 02:47'
  },
  {
    name: 'Закат',
    icon: 'sunset',
    value: '16:37',
    description: 'Осталось: 05:08'
  },
  {
    name: 'Сила ветра',
    icon: 'wind_strength',
    value: '2 м/с',
    description: 'Северо-западный'
  }
];

export const mockHourData = [
  {
    time: '12:00',
    icon: 'broken-clouds',
    temperature: '-7°'
  },
  {
    time: '15:00',
    icon: 'broken-clouds',
    temperature: '-5°'
  },
  {
    time: '18:00',
    icon: 'broken-clouds',
    temperature: '-7°'
  },
  {
    time: '21:00',
    icon: 'broken-clouds',
    temperature: '-9°'
  },
  {
    time: '00:00',
    icon: 'broken-clouds',
    temperature: '-11°'
  },
  {
    time: '03:00',
    icon: 'broken-clouds',
    temperature: '-13°'
  },
];

export const mockWeekData = [
  {
    time: 'Вс, 07 янв.',
    icon: 'few-clouds',
    temperature: 'от -17° до -11°'
  },
  {
    time: 'Пн, 08 янв.',
    icon: 'few-clouds',
    temperature: 'от -16° до -8°'
  },
  {
    time: 'Вс, 09 янв.',
    icon: 'broken-clouds',
    temperature: 'от -8° до -2°'
  },
  {
    time: 'Пн, 10 янв.',
    icon: 'broken-clouds',
    temperature: 'от -6° до -1°'
  },
];