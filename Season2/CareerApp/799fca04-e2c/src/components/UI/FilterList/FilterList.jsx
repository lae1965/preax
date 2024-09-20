import { useEffect, useState } from 'react';

import styles from './FilterList.module.css';

import { FilterItem } from './FilterItem/FilterItem';
import { formatCitiesJson } from '@utils/formatCitiesJson';
import clsx from '@utils/clsx';
import { useVacancyStore } from '@store/vacancyStore';

export const FilterList = ({ items }) => {
  const [citiesList, setCitiesList] = useState([]);
  const [filtersCount, setFiltersCount] = useState(0);
  const [
    filters,
    fetchVacancies,
    clearFilters,
    changeFilters,
    clearChangeFilters,
  ] = useVacancyStore((state) => [
    state.filters,
    state.fetchVacancies,
    state.clearFilters,
    state.changeFilters,
    state.clearChangeFilters,
  ]);

  useEffect(() => {
    setCitiesList(formatCitiesJson());
  }, []);

  useEffect(() => {
    clearChangeFilters();
    setFiltersCount(
      Object.keys(filters).reduce((count, key) => {
        if (Array.isArray(filters[key])) return count + filters[key].length;
        else if (filters[key] !== 'none' && filters[key] !== false)
          return count + 1;
        return count;
      }, 0)
    );
    sessionStorage.setItem(
      'filters_of_Andrey_Lashkevich',
      JSON.stringify(filters)
    );
    fetchVacancies();
  }, [changeFilters]);

  const handleClearFilters = () => {
    clearFilters();
  };

  return (
    <section className={styles.container}>
      <li className={styles.filterList}>
        {items.map((item) => (
          <FilterItem
            key={item.name}
            type={item.type}
            name={item.name}
            text={item.text}
            icon={item.icon}
            items={item.type === 'dropdown' ? item.items : citiesList}
          />
        ))}
      </li>
      {!!filtersCount && (
        <button
          className={clsx('btn', styles.resetBtn)}
          onClick={handleClearFilters}
        >
          Сбросить все фильтры
        </button>
      )}
    </section>
  );
};
