import React from 'react';
import FilterList from '@components/filterList/FilterList';
import VacancyList from '@components/vacancyList/VacancyList';
import styles from './Main.module.css';

const Main = () => {
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
