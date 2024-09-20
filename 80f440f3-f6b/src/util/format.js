import { weekDays, months } from './constants';

const digit2string = (digit) => digit.toString().padStart(2, '0');

export const formatTime = (date) =>
  `${digit2string(date.getHours())}:${digit2string(date.getMinutes())}`;

export const formatDate = (date) =>
  `${weekDays[date.getDay()]}, ${digit2string(date.getDate())} ${
    months[date.getMonth()]
  }`;
