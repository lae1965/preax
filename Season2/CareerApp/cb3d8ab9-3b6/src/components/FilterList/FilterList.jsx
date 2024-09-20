import { FilterItem } from '..';
import { List } from '../UI';
import { dataFilter } from '../../constants';
import { useState } from 'react';
import styles from './filterList.module.css';

export const FilterList = () => {
  const [focusedFilter, setFocusedFilter] = useState(null);

  return (
    <div className={styles.filter}>
      <List className={styles.list}>
        {dataFilter.map((filter) => {
          return (
            <FilterItem
              type={filter.type}
              filterId={filter.id}
              extraIcon={filter.extraIcon}
              icon={filter.icon}
              text={filter.text}
              key={filter.id}
              options={filter.options}
              focused={focusedFilter === filter.id}
              setFocused={(filterId) => setFocusedFilter(filterId)}
            />
          );
        })}
      </List>
      <button className={styles.clearButton}>Сбросить все фильтры</button>
    </div>
  );
};
