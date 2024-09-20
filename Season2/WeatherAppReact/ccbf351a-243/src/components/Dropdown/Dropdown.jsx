import { useEffect } from 'react';
import { Icon } from '../';
import { useActiveCity, useCitiesPool } from '../../hooks';
import { Loader } from '../UI';

import styles from './dropdown.module.css';

export const Dropdown = ({
  isLoading,
  result,
  resetResult,
  setIsdDropdownOpen,
}) => {
  const { changeActiveCity } = useActiveCity();
  const { cities, resetCitiesPool } = useCitiesPool();

  useEffect(() => {
    resetResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.dropdown}>
      <div className={styles.head}>
        {isLoading && <h2 className={styles.title}>Ищем...</h2>}
        {!isLoading && result && result.apiCity && (
          <h2 className={styles.title}>Результаты</h2>
        )}
        {!isLoading && !result && (
          <h2 className={styles.title}>Недавно смотрели</h2>
        )}
        {!isLoading && result && result.length === 0 && (
          <h2 className={styles.title}>Упс! Город не найден</h2>
        )}
        {!isLoading && !result && (
          <Icon
            className={`${styles.icon} ${
              !cities.length ? styles.disabled : ''
            }`}
            icon={'delete'}
            onClick={() => resetCitiesPool()}
          />
        )}
      </div>
      {!cities.length && !isLoading && !result && (
        <span className={styles.text}>История поиска пустая.</span>
      )}
      {!isLoading && result && result.apiCity && (
        <button
          className={styles.button}
          onClick={() => {
            changeActiveCity(result);
            resetResult();
            setIsdDropdownOpen(false);
          }}
        >
          {result.apiCity}
        </button>
      )}
      {!isLoading && result && result.length === 0 && (
        <span className={styles.text}>Попробуйте другое название.</span>
      )}
      {cities && !isLoading && !result && (
        <ul className={styles.list}>
          {cities.map((city) => {
            return (
              <li className={styles.item} key={city.id}>
                <button
                  className={styles.button}
                  onClick={() => {
                    changeActiveCity(city);
                    setIsdDropdownOpen(false);
                  }}
                >
                  {city.apiCity}
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {isLoading && <Loader />}
    </div>
  );
};
