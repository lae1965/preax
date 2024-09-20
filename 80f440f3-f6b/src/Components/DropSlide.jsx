import React, { useContext, useEffect, useState } from 'react';

import search from '../assets/img/search.png';
import {
  CityContext,
  ForecastContext,
  LoadingContext,
  WeatherContext,
} from '../util/context';
import { cityFetch, forecastFetch, weatherFetch } from '../api/api';

export const DropSlide = ({ isShow, isDisable, dropOff }) => {
  const [city, setCity] = useState('');
  const [modal, setModal] = useState(false);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { cityList, setCityList, activeIndex, setActiveIndex } =
    useContext(CityContext);
  const { setWeather } = useContext(WeatherContext);
  const { setWeekForecast, setHourForecast } = useContext(ForecastContext);

  const saveActiveIndex = (index) => {
    setActiveIndex(index);
    localStorage.setItem(
      `activeCity${process.env.REACT_APP_STORAGE_POSTFIX}`,
      index
    );
  };

  const handleChange = (e) => {
    setCity(e.target.value);
    setModal(false);
  };

  useEffect(() => {
    (async () => {
      const data = await weatherFetch(cityList[activeIndex]);
      setWeather(data);

      const { weekForecast, hourForecast } = await forecastFetch(
        cityList[activeIndex]
      );
      setWeekForecast(weekForecast);
      setHourForecast(hourForecast);

      setCity('');
      setModal(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, cityList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.length) return;

    setIsLoading(true);
    const data = await cityFetch(city);
    if (data) {
      let findNumber = cityList.findIndex(
        (element) => element.city.toLowerCase() === data.city.toLowerCase()
      );
      if (findNumber === -1) {
        const newList = cityList.slice(0, 4);
        newList.unshift(data);
        setCityList([...newList]);
        saveActiveIndex(0);
        localStorage.setItem(
          `cities${process.env.REACT_APP_STORAGE_POSTFIX}`,
          JSON.stringify(newList)
        );
      } else {
        saveActiveIndex(findNumber);
      }

      setModal(false);
      setTimeout(() => {
        dropOff();
      }, 250);
    } else {
      setModal(true);
      setIsLoading(false);
    }
  };

  const handleChangeActive = (index) => {
    if (index === activeIndex) return;
    setIsLoading(true);
    saveActiveIndex(index);
    setModal(false);
    setTimeout(() => {
      dropOff();
    }, 250);
  };

  return (
    <div
      className={`left-side__drop 
      ${isShow ? 'show' : ''} 
      ${isDisable ? 'disable' : ''}`}
    >
      <svg
        className='exit'
        onClick={() => {
          setModal(false);
          setCity('');
          dropOff();
        }}
        width='26'
        height='26'
        viewBox='0 0 26 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z' />
      </svg>
      <form className='get-city' onSubmit={handleSubmit}>
        <div className='input-city'>
          <img src={search} alt='search' />
          <input
            autoFocus
            type='text'
            placeholder='Населенный пункт'
            value={city}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <button className='search-button' type='submit'>
          Найти
        </button>
        {modal && (
          <p className='not-found'>Упс! Город не найден, попробуйте другой.</p>
        )}
      </form>

      <div className='city-list'>
        {cityList.map((item, index) => (
          <div
            className={`city-list__item ${
              index === activeIndex ? 'city-list__active-item' : ''
            }`}
            key={index}
            onClick={() => handleChangeActive(index)}
          >
            {item.city}
            <svg
              width='11'
              height='15'
              viewBox='0 0 11 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='citi-list__item-fill'
                d='M2.09312 -3.05176e-05L0 1.76247L6.79892 7.49997L0 13.2375L2.09312 15L11 7.49997L2.09312 -3.05176e-05Z'
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
