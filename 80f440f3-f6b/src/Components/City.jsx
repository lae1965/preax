import React, { useContext, useState } from 'react';

import '../assets/styles/aside.css';
import '../assets/styles/media-aside.css';

import { DropSlide } from './DropSlide';
import { ToggleTheme } from './ToggleTheme';
import { CityContext, WeatherContext } from '../util/context';
import { formatDate } from '../util/format';

export const City = () => {
  const [isShowDrop, setIsShowDrop] = useState(false);
  const [isDisableDrop, setIsDisableDrop] = useState(true);
  const { cityList, activeIndex } = useContext(CityContext);
  const { weather } = useContext(WeatherContext);

  const handleDropOn = () => {
    setIsDisableDrop(false);
    setTimeout(() => {
      setIsShowDrop(true);
    }, 20);
  };

  const handleDropOff = () => {
    setIsShowDrop(false);
    setTimeout(() => {
      setIsDisableDrop(true);
    }, 300);
  };

  return (
    <aside className='left-side'>
      <DropSlide
        isShow={isShowDrop}
        isDisable={isDisableDrop}
        dropOff={handleDropOff}
      />
      <div className='left-side__fon'>
        <div className='heading-buttons'>
          <button className='search-city' onClick={handleDropOn}>
            Поиск города
          </button>
          <ToggleTheme />
        </div>
        <div className='content'>
          {weather.image && (
            <img
              src={`https://openweathermap.org/img/wn/${weather.image?.slice(
                0,
                2
              )}d@2x.png`}
              alt='snow-flake'
              className='snow-flake'
            />
          )}
          <p className='temperature'>
            {weather.temp}
            <span className='degrees'>&nbsp;&deg;C</span>
          </p>
          <p className='precipitation'>
            {weather.description?.charAt(0).toUpperCase() +
              weather.description?.slice(1) || ''}
          </p>
          <p className='feelings'>Ощущается как {weather.feelsLike} °C</p>
          <div className='date'>
            <div>Сегодня</div>
            <div>{formatDate(new Date())}</div>
          </div>
          <p className='city'>{cityList[activeIndex].city}</p>
        </div>
      </div>
    </aside>
  );
};
