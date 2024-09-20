import React, { useContext, useCallback } from 'react';

import '../assets/styles/details.css';
import '../assets/styles/media-details.css';
import { Spinner } from './Spinner';
import { LoadingContext, WeatherContext } from '../util/context';
import { HumidityRange } from './HumidityRange';
import { getWindDirection } from '../util/getWindDirection.js';

export const Details = () => {
  const { weather } = useContext(WeatherContext);
  const { isLoading } = useContext(LoadingContext);

  const getDir = useCallback(() => {
    return getWindDirection(weather.windDeg);
  }, [weather.windDeg]);

  return (
    <section className='details'>
      <h4 className='details__heading'>Подробно на сегодня</h4>
      <div className='details__listing'>
        <div className='details__card'>
          {(isLoading && <Spinner />) || (
            <>
              <p className='card__parametr'>Скорость ветра</p>
              <p className='card__value'>
                {weather.windSpeed}{' '}
                <span className='card__measurement'>м/с</span>
              </p>
              <div className='card__wind'>
                <svg
                  width='38'
                  height='38'
                  viewBox='0 0 38 38'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ transform: `rotate(${weather.windDeg + 225}deg)` }}
                >
                  <circle cx='19' cy='19' r='19' fill='#48484A' />
                  <path
                    d='M18.1951 31.0029L10.0872 10.8978C9.76221 10.092 10.5487 9.28365 11.3631 9.58643L31.9073 17.2246C32.7267 17.5293 32.7906 18.6717 32.0237 19.0912C26.1915 22.2822 23.1612 25.3608 20.0501 31.0907C19.6388 31.8482 18.5175 31.8023 18.1951 31.0029Z'
                    fill='#E6E6E6'
                  />
                </svg>
                <span className='card__wind-direction'>{getDir()}</span>
              </div>
            </>
          )}
        </div>
        <div className='details__card'>
          {(isLoading && <Spinner />) || (
            <>
              <p className='card__parametr'>Влажность</p>
              <p className='card__value'>
                {weather.humidity} <span className='card__measurement'>%</span>
              </p>
              <HumidityRange humidity={weather.humidity} />
            </>
          )}
        </div>
        <div className='details__card'>
          {(isLoading && <Spinner />) || (
            <>
              <p className='card__parametr'>Видимость</p>
              <p className='card__value'>
                {weather.visibility}{' '}
                <span className='card__measurement'>км</span>
              </p>
            </>
          )}
        </div>
        <div className='details__card'>
          {(isLoading && <Spinner />) || (
            <>
              <p className='card__parametr'>Давление</p>
              <p className='card__value'>
                {weather.pressure}{' '}
                <span className='card__measurement-18'>мм рт. ст.</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
