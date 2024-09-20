import styles from './card.module.css';
import { useWeather } from '../../hooks/useWeatherContext';
import { searchStatus } from '../../utils/constants';

export const Card = ({ children }) => {
  const { statusOfSearch } = useWeather();

  return (
    <div
      className={styles.container}
      data-isdrop={
        statusOfSearch > searchStatus.isClosedDrop ? 'true' : 'false'
      }
    >
      {children}
    </div>
  );
};
