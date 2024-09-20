import React from 'react';

export const ToggleWeekHour = ({ isWeek, handleToggleWeek }) => {
  return (
    <div className='forecast'>
      Прогноз
      <div>
        <span
          id='forecast__week'
          className={`forecast__week-hour ${isWeek ? 'forecast__active' : ''}`}
          onClick={handleToggleWeek}
        >
          на неделю
        </span>
        <span
          id='forecast__hour'
          className={`forecast__week-hour ${!isWeek ? 'forecast__active' : ''}`}
          onClick={handleToggleWeek}
        >
          почасовой
        </span>
      </div>
    </div>
  );
};
