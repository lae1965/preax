import React from 'react';

import styles from './Main.module.css';

import FilterList from '@components/filterList/FilterList';
import VacancyList from '@components/vacancyList/VacancyList';
import { useBurgerStore } from '@store/burgerStore';

const Main = () => {
  const { isBurgerOpen } = useBurgerStore();

  if (isBurgerOpen) return <></>;
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <FilterList />
        <VacancyList />
      </div>
    </main>
  );
};

export default Main;
