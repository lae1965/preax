import { useEffect, useState } from 'react';

import { useVacancyStore } from '@store/vacancyStore';
import { CheckSVG } from '../IconsSVG/CheckSVG';
import styles from './Checkbox.module.css';

export const Checkbox = ({
  id,
  name,
  value,
  text,
  focusRef,
  isCheckedCityList = false,
}) => {
  const [filters, setValueToFilters, deleteValueFromFilters, changeFilters] =
    useVacancyStore((state) => [
      state.filters,
      state.setValueToFilters,
      state.deleteValueFromFilters,
      state.changeFilters,
    ]);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    let checked;
    if (Array.isArray(filters[name])) {
      const index = filters[name].findIndex((item) => item === value);
      checked = index !== -1;
    } else checked = !!filters[name];
    setIsChecked(checked);
  }, [changeFilters]);

  const handleToggle = () => {
    if (isChecked) deleteValueFromFilters(name, value);
    else setValueToFilters(name, value);
    focusRef?.current?.focus();
  };

  return (
    <label htmlFor={id} className={styles.label}>
      <input
        className={styles.input}
        type='checkbox'
        name={name}
        id={id}
        value={value}
        onChange={handleToggle}
        checked={isChecked}
      />
      <span className={styles.checkbox}>
        <CheckSVG />
      </span>
      {text}
    </label>
  );
};
