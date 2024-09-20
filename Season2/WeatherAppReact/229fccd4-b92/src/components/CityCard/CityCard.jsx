import { Icon } from '../Icon/Icon';
import styles from './cityCard.module.css';

export const CityCard = () => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>Кременчуг-константиновское</h2>
      <span className={styles.day}>Суббота, 06 января</span>
      <span className={styles.time}>11:29</span>
      <span className={styles.degree}>
        -<span className={styles.degreeCurrent}>7</span>°
      </span>
      <div className={styles.weather}>
        <Icon icon='04d' className={styles.icon} alt='Иконка погоды' />
        <span>Облачно с прояснениями</span>
      </div>
      <span className={styles.feeling}>Ощущается как -11°</span>
    </section>
  );
};
