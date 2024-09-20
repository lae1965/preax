import clsx from '@utils/clsx';
import VacancyBlock from './VacancyBlock';
import PaginatePagesList from '../PaginatePagesList';
import styles from './VacancyList.module.css';

const VacancyList = ({ data }) => {
  if (!data.length) return 'Нет данных';

  return (
    <>
      {data.map((item) => (
        <section key={item.date} className={styles.vacanciesSection}>
          <h1 className={clsx('title', styles.title)}>{item.date}</h1>
          <VacancyBlock data={item.vacancies} />
        </section>
      ))}
      <PaginatePagesList />
    </>
  );
};

export default VacancyList;
