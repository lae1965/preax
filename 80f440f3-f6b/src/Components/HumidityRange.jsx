import React from 'react';

import '../assets/styles/range.css';

export const HumidityRange = ({ humidity }) => {
  return (
    <div className='range'>
      <div className='range__digits'>
        <div>0</div>
        <div>50</div>
        <div>100</div>
      </div>
      <div className='range__back-layer'>
        <div
          className='range__front-layer'
          style={{ width: `${humidity}%` }}
        ></div>
      </div>
      <div className='range__digits range__percents'>%</div>
    </div>
  );
};
