import React, { useContext, useState } from 'react';
import Logo from '../UI/Logo/Logo';
import Input from '../UI/Input/Input';
import EmojiSelector from '../UI/EmojiSelector/EmojiSelectior';
import styles from './Header.module.css';
import { Button } from '../UI/Button/Button';
import { IsShowContext } from '../../utils/context';

const Header = () => {
  const [value, setValue] = useState('');
  const { setIsShowAddNote } = useContext(IsShowContext);

  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <Logo />
        <form id='search' className={styles.inputGroup}>
          <Input inputValue={value} setInputValue={setValue} />
          <EmojiSelector />
        </form>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          onClick={() => setIsShowAddNote(true)}
          text='Добавить запись'
          iconName='pen'
          mobileShortMode='true'
        />
      </div>
    </header>
  );
};

export default Header;
