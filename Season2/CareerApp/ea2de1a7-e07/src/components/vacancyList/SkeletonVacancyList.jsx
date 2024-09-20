import styles from './VacancyList.module.css';

const SkeletonVacancyList = ({ isLoadTitle = true, skeletonCount = 18, className }) => {
  return (
    <div className={`${styles.skeleton} ${className ?? ''}`}>
      {isLoadTitle && <div className={styles['skeleton-title']}></div>}
      <ul className={styles['skeleton-list']}>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <li key={index} className={styles['skeleton-item']}>
            <div className={styles['skeleton-header']}></div>
            <div className={styles['skeleton-body']}></div>
            <div className={styles['skeleton-footer']}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkeletonVacancyList;
