import { useEffect, useState } from 'react';
import { Input } from '../UI';
import { Icon, Dropdown } from '../';
import { getCityData } from '../../api';
import { useCitiesPool, useClickOutside } from '../../hooks';

import styles from './weatherSearch.module.css';

export const WeatherSearch = ({ isDropdownOpen, setIsdDropdownOpen }) => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const ref = useClickOutside(() => {
    setIsdDropdownOpen(false);
  });

  const [resultSearch, setResultSearch] = useState(null);
  const { changeCitiesPool } = useCitiesPool();

  const resetResult = () => {
    setResultSearch(null);
  };

  const onChange = (e) => {
    const newValue = e.target.value;
    if (!newValue.match(/[A-Za-z]/g)) {
      setValue(newValue);
    }
  };
  const onClear = () => {
    setValue('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isLoading || !value) return;
    setIsLoading(true);
    resetResult();
    onClear();
    setResultSearch(null);
    setResultSearch(await getCityData(value));
    setIsLoading(false);
  };

  useEffect(() => {
    if (resultSearch && resultSearch.apiCity) {
      changeCitiesPool(resultSearch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultSearch]);

  return (
    <div className={styles.wrapper} ref={ref}>
      <form onSubmit={onSubmit}>
        <Input
          className={styles.input}
          onChange={onChange}
          value={value}
          onClick={() => {
            setIsdDropdownOpen(true);
          }}
          placeholder='Поиск по городу'
          type='search'
          disabled={isLoading}
        >
          {value && (
            <Icon icon='clear' className={styles.icon} onClick={onClear} />
          )}
          {!value && <Icon icon='search' className={styles.icon} />}
        </Input>
      </form>
      {isDropdownOpen && (
        <Dropdown
          isLoading={isLoading}
          result={resultSearch}
          setIsdDropdownOpen={setIsdDropdownOpen}
          resetResult={resetResult}
        />
      )}
    </div>
  );
};
