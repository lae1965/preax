import React from 'react';

import style from './Button.module.css';

export const Button = () => {
  return (
    <button type='button' className={style.button}>
      Добавить запись
    </button>
  );
};
