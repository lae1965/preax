import styles from './styles.module.css';
import cloud from '../../img/weather/day_broken_clouds.png'; 

const data = {
  name: "Москва",
  date: "Суббота, 06 января",
  time: "11:29",
  temp: "-7°",
  img: {
    src: cloud,
    alt: "Облачно"
  },
  description: "Ощущается как -11°"

};

const CityCard = () => {
  return (
    <div className={styles['panel-info']}>
      <div className={styles['panel-info__row']}>
        <div className={styles['panel-info__title']}>{data.name}</div>
        <div className={styles['panel-info__text']}>{data.date}</div>
        <div className={styles['panel-info__text']}>{data.time}</div>
      </div>

      <div className={styles['panel-info__temp']}>{data.temp}</div>

      <div className={styles['panel-info__row']}>
        <div className={`${styles['panel-info__text']} ${styles['panel-info__state']}`}>
          <img className={styles['panel-info__img']} src={data.img.src} alt={data.img.alt}/>
          {data.img.alt}
        </div>
        <div className={styles['panel-info__text']}>{data.description}</div>
      </div>
    </div>
  );
};

export default CityCard;