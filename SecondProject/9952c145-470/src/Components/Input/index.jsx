import React from 'react';

import style from './Input.module.css';

export const Input = () => {
  return <input type='text' placeholder='Поиск' className={style.input} />;
};
