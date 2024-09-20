import React, { useContext } from 'react';

import { Spinner } from './Spinner';

import { LoadingContext } from '../util/context';

export const Week = ({ listForecast, cardListBegin, cardsCount }) => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <div className='forecast-list__active'>
      {listForecast
        .slice(cardListBegin, cardListBegin + cardsCount)
        .map((card, index) => (
          <div className='card' key={index}>
            {(isLoading && <Spinner />) || (
              <>
                <p>{card.date}</p>
                <div className='card__img-wrapper'>
                  <img
                    className='card__img'
                    src={`https://openweathermap.org/img/wn/${card.image}@2x.png`}
                    alt={card.image}
                  />
                </div>
                <p className='card__temperature-day'>
                  {`${card.tempMax}°C`}
                  {card.tempMin !== undefined && (
                    <span className='card__temperature-night'>
                      {`${card.tempMin}°C`}
                    </span>
                  )}
                </p>
              </>
            )}
          </div>
        ))}
    </div>
  );
};
