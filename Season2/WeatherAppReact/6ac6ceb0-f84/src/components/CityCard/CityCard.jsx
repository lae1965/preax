import { BrokenClouds } from '../SVG/BrokenClouds';
import styles from './CityCard.module.css';

export const CityCard = () => {
  return (
    <div className={styles.dayInfo}>
      <p className={styles.location}>Москва</p>
      <p className={styles.date}>Суббота, 06 января</p>
      <p>11:29</p>
      <p className={styles.temperature}>-7&deg;</p>
      <p className={styles.status}>
        <BrokenClouds />
        Облачно
      </p>
      <p>Ощущается как -11°</p>
    </div>
  );
};
