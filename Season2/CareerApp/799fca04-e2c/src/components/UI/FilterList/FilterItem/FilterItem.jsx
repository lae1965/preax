import { useEffect, useRef, useState } from 'react';

import styles from './FilterItem.module.css';

import { Dropdown } from '@components/UI/Dropdown/Dropdown';
import { Input } from '@components/UI/Input/Input';
import { prepareStringToCompare } from '@utils/prepearStringToCompare';
import { Checkbox } from '@components/UI/Checkbox/Checkbox';
import { useVacancyStore } from '@store/vacancyStore';
import { CityList } from './CityList/CityList';

export const FilterItem = ({
  type = 'input',
  name,
  text,
  icon: Icon,
  items,
}) => {
  const [cityValue, setCityValue] = useState('');
  const [isShowCitiesList, setIsShowCitiesList] = useState(false);
  const [foundCities, setFoundCities] = useState([]);
  const [focus, setFocus] = useState(false);
  const { filters } = useVacancyStore();
  const inputRef = useRef(null);

  const handleChange = (e) => {
    let value = e.target.value;
    setCityValue(value);
    value = prepareStringToCompare(value);
    if (value.length > 2) {
      const found = {};
      for (let key in items) {
        if (
          items.hasOwnProperty(key) &&
          prepareStringToCompare(items[key]).startsWith(value)
        )
          found[key] = items[key];
      }
      setFoundCities(found);
      setIsShowCitiesList(true);
    } else setIsShowCitiesList(false);
  };

  return (
    <div>
      {type === 'dropdown' ? (
        <Dropdown name={name} placeholder={text} icon={Icon} items={items} />
      ) : (
        <div
          className={styles.dropdown}
          onFocusCapture={() => {
            setFocus(true);
          }}
          onBlurCapture={() => {
            setFocus(false);
          }}
        >
          <Input
            ref={inputRef}
            name={name}
            placeholder={text}
            icon={Icon}
            value={cityValue}
            onChange={handleChange}
            className={
              (isShowCitiesList && !!Object.keys(foundCities).length) ||
              (!!filters.area.length && focus)
                ? styles.input
                : ''
            }
            autoComplete='off'
          />
          {(isShowCitiesList && !!Object.keys(foundCities).length && (
            <CityList
              cities={foundCities}
              inputRef={inputRef}
              clearInputValue={() => {
                handleChange({ target: { value: '' } });
              }}
              isCheckedCityList={true}
              className={styles.dropdownList}
            />
          )) ||
            (!!filters.area.length && (
              <CityList
                cities={filters.area}
                inputRef={inputRef}
                textItems={items}
                className={styles.dropdownList}
              />
            ))}
        </div>
      )}
    </div>
  );
};
