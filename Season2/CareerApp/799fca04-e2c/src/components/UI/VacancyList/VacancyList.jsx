import { useEffect } from 'react';
import { VacancyBlock } from './VacancyBlock/VacancyBlock';
import { useVacancyStore } from '@store/vacancyStore';
import { Pagination } from '../Pagination/Pagination';
import styles from './VacancyList.module.css';

export const VacancyList = () => {
  const [vacancies, fetchVacancies, pages, loading, page, setPage, blackList] =
    useVacancyStore((state) => [
      state.vacancies,
      state.fetchVacancies,
      state.pages,
      state.loading,
      state.page,
      state.setPage,
      state.blackList,
    ]);

  useEffect(() => {
    fetchVacancies(page - 1);
  }, []);

  let vacancyObjects = loading
    ? Array.from({ length: 18 }).map(() => ({
        date: '',
        vacancies: [{}, {}, {}],
      }))
    : Object.values(vacancies);

  const handleSetPage = (newPage) => {
    fetchVacancies(newPage - 1);
    setPage(newPage);
  };

  if (!vacancyObjects.length)
    return (
      <p className={styles.noVacancy}>
        Не удалось найти вакансии с выбранными параметрами.
        <br />
        Попробуйте другие.
      </p>
    );

  return (
    <>
      {vacancyObjects.map((vacancy, index) => (
        <div key={index} className={styles.wrapper}>
          <VacancyBlock date={vacancy.date} info={vacancy.vacancies} />
        </div>
      ))}

      <Pagination pages={pages} page={page} handleSetPage={handleSetPage} />
    </>
  );
};
