import styles from './NotFoundImages.module.css';
import notFound from '../../assets/notFound.png';

export const NotFoundImages = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <img src={notFound} alt='Ничего не найдено' />
      <p className={styles.text}>По твоему запросу ничего не найдено</p>
    </div>
  </div>
);
