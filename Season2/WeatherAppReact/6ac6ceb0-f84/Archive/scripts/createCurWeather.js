import { mockDayData } from "./mockData.js";
import { createElement } from "./util.js";

export const createCurWeather = () => {
  const parent = document.querySelector('.more-info');

  mockDayData.forEach(item => {
    const infoItem = createElement(parent, 'div', 'more-info__item');

    createElement(infoItem, 'h2', 'item__name', item.name);

    const img = createElement(infoItem, 'img', 'item__icon');
    img.src = `./public/${item.icon}.svg`;
    img.alt = item.icon;

    createElement(infoItem, 'span', 'item__value', item.value);

    const wrapper = createElement(infoItem, 'div', 'item__description-wrapper');


    if (item.scrollRange) {
      const pointPosition = item.scrollRange.pointPosition / 1.26;
      const mask = `radial-gradient(circle at ${pointPosition}%, transparent 6px, black 0)`;
      const point = createElement(wrapper, 'div', 'item__point');
      point.style.marginLeft = `calc(${pointPosition}% - 4px)`;

      const stripe = createElement(wrapper, 'div', 'item__stripe');
      stripe.style.background = item.scrollRange.background;
      stripe.style.mask = mask;
      stripe.style.webkitMask = mask;
    }

    const description = createElement(wrapper, 'div', 'item__description');
    if (typeof item.description === 'string') description.innerText = item.description;
    else {
      createElement(description, 'span', null, item.description.left);
      createElement(description, 'span', null, item.description.right);
      description.style.justifyContent = 'space-between';
    }

  });
}