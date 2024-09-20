import React, { useEffect, useState } from 'react';
import { useVacancyStore } from '@store/vacancyStore';
import VacancyBlock from './vacancyBlock/VacancyBlock';
import SkeletonVacancyList from './SkeletonVacancyList';
import Pagination from '@components/pagination/Pagination';
import styles from './VacancyList.module.css';
import { usePageStore } from '@store/pageStore';
import { useQuerySearchParams } from '@store/querySearchParams';

const VacancyList = () => {
  const [
    vacancies,
    pagesCount,
    fetchVacancyList,
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

  const { queryParams, writeQueryParams, blackList, toggleBlackList } =
    useQuerySearchParams();

  useEffect(() => {
    if (queryParams.length) {
      toggleBlackList();
      const sumParams = [];
      const query =
        queryParams
          ?.map((item) => {
            if (item.query === 'label' && item.id === 'hidden') {
              return;
            }
            if (item.query === 'period' && item.id == '0') {
              return;
            }
            if (item.query === 'salary' && item.id == '10') {
              return;
            }
            if (item.query === 'experience' && item.id == 'noExperience') {
              return;
            }
            if (item.query === 'text') {
              sumParams.push(item.id);
              return;
            }
            return `&${item.query}=${item.id}`;
          })
          .join('') +
        '&text=frontend+' +
        sumParams?.join('+');
      fetchVacancyList(curPage - 1, false, query, blackList);
    }
    if (!queryParams.length) {
      const newQueryParams = new URLSearchParams(window.location.search);
      const writeQuery = [];
      const sumParams = [];
      if (newQueryParams.size > 0) {
        for (const [key, value] of newQueryParams.entries()) {
          writeQuery.push({ query: key, id: value });
        }
      }

      fetchVacancyList(
        curPage - 1,
        false,
        writeQuery
          ?.map((item) => {
            if (item.query === 'label' && item.id === 'hidden') {
              return;
            }
            if (item.query === 'experience' && item.id == 'noExperience') {
              return;
            }
            if (item.query === 'period' && item.id == '0') {
              return;
            }
            if (item.query === 'salary' && item.id == '10') {
              return;
            }
            if (item.query === 'text') {
              sumParams.push(item.id);
              return;
            }
            return `&${item.query}=${item.id}`;
          })
          .join('') +
          '&text=frontend+' +
          sumParams?.join('+'),
        blackList
      );
      writeQueryParams(writeQuery);
    }
  }, [curPage]);

  useEffect(() => {
    if (!queryParams.length) return;
    toggleBlackList();
    const sumParams = [];
    const query =
      queryParams
        ?.map((item) => {
          if (item.query === 'label' && item.id === 'hidden') {
            return;
          }
          if (item.query === 'period' && item.id == '0') {
            return;
          }
          if (item.query === 'salary' && item.id == '10') {
            return;
          }
          if (item.query === 'experience' && item.id == 'noExperience') {
            return;
          }
          if (item.query === 'text') {
            sumParams.push(item.id);
            return;
          }
          return `&${item.query}=${item.id}`;
        })
        .join('') +
      '&text=frontend+' +
      sumParams?.join('+');
    setCurPage(1);
    fetchVacancyList(0, false, query, blackList);
  }, [queryParams]);

  if (errorVacancies) {
    return errorVacancies;
  }

  return (
    <>
      {
        <ul className={styles.wrapper}>
          {loadingVacancies ? (
            <SkeletonVacancyList />
          ) : vacancies.length === 0 ? (
            <div className={styles.empty}>
              <p> Не удалось найти вакансии с выбранными параметрами.</p>
              <p>Попробуйте другие.</p>
            </div>
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
      }
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
