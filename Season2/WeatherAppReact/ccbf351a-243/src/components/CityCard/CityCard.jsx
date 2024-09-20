import styles from './cityCard.module.css';

import { Icon } from '../Icon/Icon';
import { useActiveCity } from '../../hooks/useActiveCity';
import { convertTime } from '../../utils/convertTime';
import { useWeather } from '../../hooks';

export const CityCard = () => {
  const { weather } = useWeather();
  const { activeCity } = useActiveCity();

  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>{activeCity?.apiCity}</h2>
      {weather && (
        <>
          <span className={styles.day}>
            {new Date(weather.date).toLocaleDateString('ru-RU', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
            })}
          </span>
          <span className={styles.time}>{convertTime(weather.date)}</span>
          <span className={styles.degree}>{weather.temperature}°</span>
          <div className={styles.weather}>
            <Icon
              icon={weather.icon}
              className={styles.icon}
              alt='Иконка погоды'
            />
            <span>{weather.description}</span>
          </div>
          <span className={styles.feeling}>
            Ощущается как {weather.feelsLike}°
          </span>
        </>
      )}
    </section>
  );
};
