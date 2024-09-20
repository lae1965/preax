import React from 'react';
import { useState } from 'react';

import Logo from '../UI/Logo/Logo';
import Input from '../UI/Input/Input';
import EmojiSelector from '../UI/EmojiSelector/EmojiSelectior';
import Button from '../UI/Button/Button';
import Pen from '../../assets/svg/Pen';

import styles from './Header.module.css';

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  // для переиспользования инпута зачем вопрос спорный а может и нет
  const handleBlur = () => {
    setIsInputFocused(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFocus = () => {
    setIsInputFocused(true);
  };
  //

  return (
    <header className={styles.header}>
      <Logo />
      <form id='search' className={styles.inputGroup}>
        <Input
          inputValue={inputValue}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleFocus={handleFocus}
          isFocused={isInputFocused}
          setInputValue={setInputValue}
        />
        <EmojiSelector />
      </form>
      <Button
        // кнопка тоже мощно переиспользуется, сделал maxviner
        htmlFor='search'
        btnType='main'
        content={
          <div className={styles.headerButton}>
            <Pen className={styles.headerButtonPen} />
            <span className={styles.headerButtonText}>Добавить запись</span>
          </div>
        }
      />
    </header>
  );
};

export default Header;
