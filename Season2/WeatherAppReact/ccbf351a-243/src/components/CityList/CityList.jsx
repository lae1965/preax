import { Icon } from '../Icon/Icon';
import { ProgressBar } from '../UI';
import styles from './cityList.module.css';
import { convertTime } from '../../utils/convertTime';
import { dateDifference } from '../../utils/dateDifference';
import { getWindDirection } from '../../utils/getWindDirection';
import { useWeather } from '../../hooks';

export const CityList = () => {
  const { weather } = useWeather();

  if (!weather) return <></>;
  return (
    <section className={styles.detail}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.title}>Влажность</h3>
          <Icon
            icon='humidity'
            alt='Влажность иконка'
            className={styles.icon}
          />
          <span className={styles.data}>{weather.humidity}%</span>
          <div className={styles.barWrapper}>
            <ProgressBar current={weather.humidity} />
            <div
              className={`${styles.description} ${styles.descriptionBarVal}`}
            >
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Давление</h3>
          <Icon icon='barometr' alt='Давление иконка' className={styles.icon} />
          <span className={styles.data}>{weather.pressure}</span>
          <div className={styles.barWrapper}>
            <ProgressBar type='hight' current={weather.pressure - 700} />
            <span className={styles.description}>
              {weather.pressure < 740
                ? 'Пониженное'
                : weather.pressure > 760
                ? 'Повышенное'
                : 'Нормальное'}
            </span>
          </div>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Видимость</h3>
          <Icon
            icon='visibility'
            alt='Видимость иконка'
            className={styles.icon}
          />
          <span className={styles.data}>{weather.visibility} км</span>
          <div className={styles.barWrapper}>
            <ProgressBar current={weather.visibility * 10} />
            <span className={styles.description}>Нормальная</span>
          </div>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Рассвет</h3>
          <Icon icon='sunrise' alt='Рассвет иконка' className={styles.icon} />
          <span className={styles.data}>{convertTime(weather.sunrise, 1)}</span>
          <span className={styles.description}>
            {dateDifference(weather.date, weather.sunrise)}
          </span>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Закат</h3>
          <Icon icon='sunset' alt='Закат иконка' className={styles.icon} />
          <span className={styles.data}>{convertTime(weather.sunset, 1)}</span>
          <span className={styles.description}>
            {dateDifference(weather.date, weather.sunset)}
          </span>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Сила ветра</h3>
          <Icon
            icon='direction'
            alt='Сила ветра'
            className={styles.icon}
            style={{ transform: `rotate(${weather.windAngle + 225}deg)` }}
          />
          <span className={styles.data}>{weather.windSpeed} м/с</span>
          <span className={styles.description}>
            {getWindDirection(weather.windAngle)}
          </span>
        </li>
      </ul>
    </section>
  );
};
