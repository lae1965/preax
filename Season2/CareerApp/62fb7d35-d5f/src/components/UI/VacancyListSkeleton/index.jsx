import clsx from '@utils/clsx';
import styles from './VacancyListSkeleton.module.css';
import PaginatePagesList from '../PaginatePagesList';

const VacancyListSkeleton = () => {
  return (
    <section className={styles.vacanciesSection}>
      <h1 className={clsx('title', styles.skeleton, styles.title)}></h1>
      <ul className={clsx('list', styles.list)}>
        {Array.from({ length: 18 }).map((_, index) => (
          <li key={index} className={styles.item}>
            <article className={styles.card}>
              <div className={styles.container}>
                <h3
                  className={clsx('title', styles.skeleton, styles.name)}
                ></h3>
                <p
                  className={clsx('descr', styles.skeleton, styles.salary)}
                ></p>
                <span className={clsx(styles.skeleton, styles.company)}></span>
                <span className={clsx(styles.skeleton, styles.city)}></span>
                <span className={styles.experience}>
                  <span className={clsx(styles.skeleton, styles.icon)}></span>
                  <span className={clsx(styles.skeleton, styles.value)}></span>
                </span>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <PaginatePagesList />
    </section>
  );
};

export default VacancyListSkeleton;
