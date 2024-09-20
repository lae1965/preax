import { useEffect } from 'react';

import styles from './Header.module.css';

import { useBurgerStore } from '@store/burgerStore';
import Icon from '@components/icon/Icon';
import Button from '@components/button/Button';
import { useGetWindowWidth } from '@hooks/useGetWindowWidth';
import { clsx } from '@utils/clsx';

const Header = () => {
  const { isBurgerOpen, setIsBurgerOpen, toggleIsBurgerOpen } =
    useBurgerStore();

  const windowWidth = useGetWindowWidth();

  useEffect(() => {
    if (isBurgerOpen && windowWidth > 1023) setIsBurgerOpen(false);
  }, [isBurgerOpen, windowWidth]);

  return (
    <header className={styles.wrapper} data-burger-open={isBurgerOpen}>
      <div className={styles.shadowBlock} data-burger-open={isBurgerOpen}></div>
      <div className={styles.container} data-burger-open={isBurgerOpen}>
        <Icon
          name={'logo'}
          className={clsx(styles.logo, isBurgerOpen && styles.logoMargin)}
        />
        <nav className={styles.controls} data-burger-open={isBurgerOpen}>
          <Button className={styles.navButton}>{'Поиск вакансий'}</Button>
          <Button className={styles.navButton} disabled={true}>
            {'Избранные вакансии'}
          </Button>
        </nav>
        <button
          type='button'
          className={styles.icon}
          onClick={() => {
            toggleIsBurgerOpen();
          }}
          data-burger-open={isBurgerOpen}
        >
          <Icon name={isBurgerOpen ? 'clear' : 'burger'} />
        </button>
      </div>
    </header>
  );
};

export default Header;
