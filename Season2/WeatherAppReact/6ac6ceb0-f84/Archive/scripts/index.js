import { createCurWeather } from "./createCurWeather.js";
import { createForecast } from "./createForecast.js";

let isShowDay = true;

const search = document.querySelector('.header__search');
const input = document.querySelector('.header__input');
const clear = document.querySelector('.header__clear');
const day = document.querySelector('.slider__day');
const week = document.querySelector('.slider__week');
day.classList.add('slider__nav-active');

search.onsubmit = (e) => { e.preventDefault(); }

clear.onclick = () => {
  input.value = '';
  search.removeAttribute('data-filled');
}

input.addEventListener('input', e => {
  console.log(e.target.value);
});

input.addEventListener('focus', () => {
  search.setAttribute('data-filled', 'filled')
});

input.addEventListener('blur', e => {
  if (!!e.target.value) search.setAttribute('data-filled', 'filled')
  else search.removeAttribute('data-filled');
});

const toggleNavActive = () => {
  isShowDay = !isShowDay;
  week.classList.toggle('slider__nav-active');
  day.classList.toggle('slider__nav-active');
  createForecast(isShowDay);
}

day.onclick = () => {
  if (!isShowDay) toggleNavActive();
}

week.onclick = () => {
  if (isShowDay) toggleNavActive();
}

createCurWeather();
createForecast(isShowDay);
