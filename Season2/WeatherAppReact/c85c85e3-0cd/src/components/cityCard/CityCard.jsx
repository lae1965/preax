import Icon from '../icon/Icon';
import styles from './CityCard.module.css';

function CityCard() {
  return (
    <section className={styles.cityCard}>
      <div className={styles.dateTimeCity}>
        <h1 className={styles.location}>Кременчуг-константиновское</h1>
        <p className={styles.date}>Суббота, 06 января</p>
        <p className={styles.time}>11:29</p>
      </div>
      <div className={styles.temperature}>
        <p>-7°</p>
      </div>
      <div className={styles.weather}>
        <div className={styles.description}>
          <Icon path='/images/icons/clouds.svg' /> Облачно
        </div>
        <p>Ощущается как -11°</p>
      </div>
    </section>
  );
}

export default CityCard;
