import { useEffect } from 'react';
import useVacanciesData from '@store/useVacanciesData';
import FilterList from '@components/UI/FilterList';
import VacancyList from '@components/UI/VacancyList';
import VacancyListSkeleton from '@components/UI/VacancyListSkeleton';
import { dataFilter } from '@constants/constFilter';
import clsx from '@utils/clsx';
import styles from './Main.module.css';

const Main = () => {
  const vacancies = useVacanciesData();

  useEffect(() => {
    vacancies.fetch();
  }, []);

  return (
    <main>
      <div className={clsx('container', styles.container)}>
        <FilterList items={dataFilter} />
        {vacancies.loading ? (
          <VacancyListSkeleton />
        ) : (
          <VacancyList data={vacancies.data} />
        )}
      </div>
    </main>
  );
};

export default Main;
