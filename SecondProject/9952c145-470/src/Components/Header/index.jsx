import React from 'react';

import style from './Header.module.css';
import { Logo } from '../Logo';
import { Input } from '../Input';
import { Selector } from '../Selector';
import { Button } from '../Button';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <Logo />
        <Input />
        <Selector />
      </div>
      <Button />
    </header>
  );
};
