import React, { useEffect, useState } from 'react';
import { useVacancyStore } from '@store/vacancyStore';
import VacancyBlock from './vacancyBlock/VacancyBlock';
import SkeletonVacancyList from './SkeletonVacancyList';
import Pagination from '@components/pagination/Pagination';
import styles from './VacancyList.module.css';
import { usePageStore } from '@store/pageStore';

const VacancyList = () => {
  const [
    vacancies,
    pagesCount,
    fetchVacancy,
    loadingVacancies,
    errorVacancies,
  ] = useVacancyStore((state) => [
    state.vacancyList,
    state.pagesCount,
    state.fetchVacancyList,
    state.loading,
    state.error,
  ]);
  const [curPage, setCurPage] = usePageStore((state) => [
    state.curPaginationPage,
    state.setCurPaginationPage,
  ]);

  useEffect(() => {
    fetchVacancy('Москва', curPage - 1);
  }, [curPage]);

  if (errorVacancies) {
    return errorVacancies;
  }

  return (
    <>
      <ul className={styles.wrapper}>
        {loadingVacancies ? (
          <SkeletonVacancyList />
        ) : (
          vacancies.map((item) => (
            <VacancyBlock
              key={item.date}
              title={item.date}
              cards={item.items}
            />
          ))
        )}
      </ul>
      {pagesCount > 1 && (
        <Pagination
          curPage={curPage}
          onChange={(newPage) => setCurPage(newPage)}
          pagesCount={pagesCount}
        />
      )}
    </>
  );
};

export default VacancyList;
