import React from 'react';
import Icon from '@components/icon/Icon';
import Button from '@components/button/Button';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Icon name={'logo'} className={styles.logo} />
        <nav className={styles.controls}>
          <Button className={styles.navButton}>{'Поиск вакансий'}</Button>
          <Button className={styles.navButton} disabled={true}>
            {'Избранные вакансии'}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
