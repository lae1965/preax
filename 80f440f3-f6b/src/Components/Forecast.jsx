import React from 'react';

import { WeekHour } from './WeekHour';
import { Details } from './Details';

export const Forecast = () => {
  return (
    <main className='right-side'>
      <WeekHour />
      <Details />
    </main>
  );
};
