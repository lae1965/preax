import { mockHourData, mockWeekData } from "./mockData.js";
import { createElement } from "./util.js";

export const createForecast = (isHour) => {
  const slider = document.querySelector('.slider__slider');
  slider.innerHTML = '';
  const data = isHour ? mockHourData : mockWeekData;
  data.forEach(item => {
    const parent = createElement(slider, 'div', 'slider__item');
    parent.classList.add(isHour ? 'slider__item-hour' : 'slider__item-day');

    createElement(parent, 'span', null, item.time);

    const img = createElement(parent, 'img', 'slider__img');
    img.src = `./public/${item.icon}.svg`;
    img.alt = item.icon;

    createElement(parent, 'span', null, item.temperature);
  });
}