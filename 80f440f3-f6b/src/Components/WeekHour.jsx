import React, { useEffect, useState, useContext } from 'react';

import '../assets/styles/week-hour.css';
import '../assets/styles/media-week-hour.css';
import { Week } from './Week';
import { ToggleWeekHour } from './ToggleWeekHour';
import { ForecastContext } from '../util/context';

export const WeekHour = () => {
  const root = document.getElementById('root');
  const [isWeek, setIsWeek] = useState(true);
  const { weekForecast, hourForecast } = useContext(ForecastContext);

  const getForecastList = () => (isWeek ? weekForecast : hourForecast);

  const calculateCardsCount = (width) => {
    let count;
    if (width >= 1440) count = 6;
    else if (width <= 834) count = 12;
    else count = parseInt((Math.round(width * 0.6055) - 156 + 24) / 124);
    return count;
  };

  const [cardsCount, setCardsCount] = useState(
    calculateCardsCount(root.offsetWidth)
  );

  const [cardListBegin, setCardListBegin] = useState(0);

  const handleToggleWeek = (e) => {
    if (!e.target.classList.contains('forecast__active')) {
      setIsWeek(!isWeek);
      setCardListBegin(0);
      setCardsCount(calculateCardsCount(root.offsetWidth));
    }
  };

  useEffect(() => {
    const handleCardCount = () => {
      setCardsCount(calculateCardsCount(root.offsetWidth));
    };
    window.addEventListener('resize', handleCardCount);
    return () => {
      window.removeEventListener('resize', handleCardCount);
    };
  }, [root.offsetWidth]);

  const handleSlideRight = () => {
    if (cardListBegin + cardsCount < getForecastList().length)
      setCardListBegin(cardListBegin + 1);
  };

  const handleSlideLeft = () => {
    if (cardListBegin > 0) setCardListBegin(cardListBegin - 1);
  };

  return (
    <section className='week-hour'>
      <ToggleWeekHour isWeek={isWeek} handleToggleWeek={handleToggleWeek} />
      <div className='forecast-list'>
        <svg
          onClick={handleSlideLeft}
          width='38'
          height='38'
          viewBox='0 0 38 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            opacity={cardListBegin === 0 ? 0.3 : 1}
            cx='19'
            cy='19'
            r='19'
            transform='rotate(-180 19 19)'
            fill='white'
          />
          <path
            opacity={cardListBegin === 0 ? 0.3 : 1}
            d='M23 24.5L13.8735 18.8503C13.242 18.4593 13.242 17.5407 13.8735 17.1497L23 11.5'
            stroke='#ACACAC'
            strokeWidth='3'
          />
        </svg>
        <Week
          listForecast={getForecastList()}
          cardListBegin={cardListBegin}
          cardsCount={cardsCount}
        />
        <svg
          onClick={handleSlideRight}
          width='38'
          height='38'
          viewBox='0 0 38 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            opacity={
              cardListBegin + cardsCount >= getForecastList().length ? 0.3 : 1
            }
            cx='19'
            cy='19'
            r='19'
            fill='white'
          />
          <path
            opacity={
              cardListBegin + cardsCount >= getForecastList().length ? 0.3 : 1
            }
            d='M15 13.5L24.1265 19.1497C24.758 19.5407 24.758 20.4593 24.1265 20.8503L15 26.5'
            stroke='#ACACAC'
            strokeWidth='3'
          />
        </svg>
      </div>
    </section>
  );
};
