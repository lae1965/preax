import styles from './LoadingDots.module.css';

export const LoadingDots = () => {
  return (
    <div className={styles.loadingBlock}>
      <div className={styles.loadingCircle}></div>
      <div className={styles.loadingCircle}></div>
      <div className={styles.loadingCircle}></div>
    </div>
  );
};
