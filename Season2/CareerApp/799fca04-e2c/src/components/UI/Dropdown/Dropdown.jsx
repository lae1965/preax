import { useEffect, useState } from 'react';
import useOutsideClickObserver from '@hooks/useOutsideClickObserver';
import { ChevronSVG } from '../IconsSVG/ChevronSVG';
import clsx from '@utils/clsx';
import styles from './Dropdown.module.css';
import { RadioButton } from '../RadioButton/RadioButton';
import { Checkbox } from '../Checkbox/Checkbox';
import { useGetFiltersCount } from '@hooks/useGetFiltersCount';

export const Dropdown = ({
  type = 'default',
  name,
  placeholder,
  icon: Icon,
  items,
  active = false,
}) => {
  const [isActive, setIsActive] = useState(active);

  const ref = useOutsideClickObserver(() => {
    if (type === 'default') setIsActive(false);
  });

  const count = useGetFiltersCount(name);

  const toggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      ref={ref}
      className={clsx(styles.dropdown, type === 'nested' && styles.nested)}
    >
      <button
        className={clsx(
          'btn',
          styles.dropdownToggle,
          isActive && styles.active
        )}
        onClick={toggle}
      >
        <Icon className={styles.icon} />
        <h3 className={styles.title}>{placeholder}</h3>
        {!!count && <div className={styles.counter}>{count}</div>}
        <ChevronSVG className={styles.chevronIcon} />
      </button>
      <div className={clsx(styles.dropdownMenu, isActive && styles.active)}>
        <ul className={styles.dropdownList}>
          {items.map((item) =>
            item.type === 'dropdown' ? (
              <li key={item.name}>
                <Dropdown
                  name={item.name}
                  placeholder={item.text}
                  icon={item.icon}
                  items={item.items}
                  type='nested'
                />
              </li>
            ) : item.type === 'radio' ? (
              <li key={`${item.name}-${item.value}`}>
                <RadioButton
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  text={item.text}
                />
              </li>
            ) : item.type === 'checkbox' ? (
              <li key={`${item.name}-${item.value}`}>
                <Checkbox
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  text={item.text}
                />
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};
