import { useEffect, useState } from 'react';

import { useVacancyStore } from '@store/vacancyStore';
import styles from './RadioButton.module.css';

export const RadioButton = ({ id, name, value, text = '' }) => {
  const [filters, setValueToFilters, changeFilters] = useVacancyStore(
    (state) => [state.filters, state.setValueToFilters, state.changeFilters]
  );
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (changeFilters) setIsChecked(value === filters[name]);
  }, [changeFilters]);

  const handleToggle = () => {
    setValueToFilters(name, value);
  };

  return (
    <label htmlFor={id} className={styles.label}>
      <input
        className={styles.input}
        type='radio'
        name={name}
        id={id}
        value={value}
        onChange={handleToggle}
        checked={isChecked}
      />
      <span className={styles.radioBtn} />
      {text}
    </label>
  );
};
