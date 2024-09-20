import styles from './dropdown.module.css';
import inputStyles from '../UI/Input/input.module.css';
import { useWeather } from '../../hooks/useWeatherContext';
import { searchStatus } from '../../utils/constants';
import { Icon } from '../';
import { useEffect, useRef } from 'react';

const RecentlyWatched = ({ setCityData }) => {
  const { foundCitiesList, setFoundCitiesList, getCityByName } = useWeather();

  const clearCityList = () => {
    localStorage.removeItem('cityList240165');
    setFoundCitiesList([]);
  };

  const onCheckCity = async (e, city) => {
    e.stopPropagation();
    setCityData(await getCityByName(city));
  };

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.heading}>Недавно смотрели</h1>
        <button
          type='button'
          disabled={!foundCitiesList?.length}
          className={styles.cart}
          onClick={clearCityList}
        >
          <Icon icon='cart' />
        </button>
      </div>
      {(foundCitiesList?.length && (
        <ul>
          {foundCitiesList.map((city, index) => (
            <li key={index} className={styles.buttonWrapper}>
              <button
                type='button'
                className={styles.itemButton}
                onClick={(e) => {
                  onCheckCity(e, city);
                }}
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
      )) || <p className={styles.text}>История поиска пустая.</p>}
    </>
  );
};

const SearchResult = ({ cityData }) => {
  const { getCityWeather } = useWeather();

  const onGetWeather = async () => {
    await getCityWeather(cityData);
  };

  return (
    <>
      <h1 className={styles.heading}>Результат поиска</h1>
      <button
        className={styles.buttonWrapper}
        type='button'
        onClick={onGetWeather}
      >
        <p className={styles.itemButton}>{cityData.correctCityName}</p>
      </button>
    </>
  );
};

const NotFound = () => (
  <>
    <h1 className={styles.heading}>Упс! Город не найден</h1>
    <p className={styles.text}>Попробуйте другое название.</p>
  </>
);

const Finding = () => (
  <>
    <h1 className={styles.heading}>Ищем...</h1>
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
);

export const Dropdown = ({ cityData, setCityData }) => {
  const { statusOfSearch, setStatusOfSearch } = useWeather();
  const dropRef = useRef(null);

  useEffect(() => {
    const closeDrop = (e) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(e.target) &&
        statusOfSearch > searchStatus.isClosedDrop
      ) {
        setStatusOfSearch(searchStatus.isClosedDrop);
        setCityData(null);
      }
    };

    document.addEventListener('click', closeDrop);
    return () => document.removeEventListener('click', closeDrop);
  }, [setCityData, setStatusOfSearch, statusOfSearch]);

  return (
    <dialog
      open={statusOfSearch > searchStatus.isClosedDrop}
      className={`${inputStyles.input} ${styles.dropdown}`}
      ref={dropRef}
    >
      {statusOfSearch === searchStatus.isOpenedDrop && (
        <RecentlyWatched setCityData={setCityData} />
      )}
      {statusOfSearch === searchStatus.isFound && (
        <SearchResult cityData={cityData} />
      )}
      {statusOfSearch === searchStatus.isNotFound && <NotFound />}
      {statusOfSearch === searchStatus.isLoading && <Finding />}
    </dialog>
  );
};
