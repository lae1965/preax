import { useState } from 'react';

import styles from './weatherSearch.module.css';
import { Input } from '../UI';
import { Dropdown, Icon } from '../';
import { useWeather } from '../../hooks/useWeatherContext';
import { searchStatus } from '../../utils/constants';
import { validateInputValue } from '../../utils';

export const WeatherSearch = () => {
  const [value, setValue] = useState('');
  const [cityData, setCityData] = useState(null);
  const [inputRef, setInputRef] = useState(null);
  const { getCityByName, statusOfSearch, setStatusOfSearch } = useWeather();

  const onChange = (e) => {
    setValue((prev) => validateInputValue(e.target.value) ? e.target.value : prev);
  }
  const onClear = () => {
    setValue('');
  };

  const onChoosingCityFromList = (e) => {
    e.stopPropagation();
    setStatusOfSearch(searchStatus.isOpenedDrop);
    if (inputRef) inputRef.focus();
  };

  const onSearchEnteredCity = async (e) => {
    e.preventDefault();
    if (value) {
      setCityData(await getCityByName(value));
      onClear();
    }
  };

  return (
    <form onSubmit={onSearchEnteredCity}>
      <Input
        className={styles.input}
        onChange={onChange}
        onClick={onChoosingCityFromList}
        value={value}
        placeholder='Поиск по городу'
        setInputRef={setInputRef}
      >
        <button
          onClick={value ? onClear : onChoosingCityFromList}
          type='button'
          className={styles.iconButton}
        >
          <Icon icon={value ? 'clear' : 'search'} className={styles.icon} />
        </button>
      </Input>
      {statusOfSearch > searchStatus.isClosedDrop && (
        <Dropdown cityData={cityData} setCityData={setCityData} />
      )}
    </form>
  );
};
