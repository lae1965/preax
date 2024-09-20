import React from 'react';

import '../assets/styles/spinner.css';

export const Spinner = () => (
  <div className='spinner'>
    <div className='lds-ellipsis'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
