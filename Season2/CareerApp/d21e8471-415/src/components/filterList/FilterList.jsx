import React, { useState } from 'react';
import FilterItem from './filterItem/FilterItem';
import ModalLayout from '@components/modalLayout/ModalLayout';
import AdditionalFilters from '@components/additionalFilters/AdditionalFilters';
import Checkbox from '@components/checkbox/Checkbox';
import Button from '@components/button/Button';
import { briefCase, otherFiltersData } from '@data/filterData';
import styles from './FilterList.module.css';

const FilterList = () => {
  const [showBriefCase, setShowBriefCase] = useState(false);
  const [showAdditionalFilters, setShowAdditionalFilters] = useState(false);

  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        <FilterItem iconName='plane' type='input' text='Город' />
        <FilterItem
          iconName='briefCase'
          text='Тип занятости'
          onClick={() => {
            setShowBriefCase(!showBriefCase);
          }}
          isOpenFilter={showBriefCase}
        >
          <ModalLayout className={styles.briefCase}>
            <Checkbox list={briefCase} />
          </ModalLayout>
        </FilterItem>
        <FilterItem
          iconName='filter'
          text='Дополнительные фильтры'
          onClick={() => {
            setShowAdditionalFilters(!showAdditionalFilters);
          }}
          isOpenFilter={showAdditionalFilters}
          level='high'
        >
          <ModalLayout>
            <AdditionalFilters list={otherFiltersData} />
          </ModalLayout>
        </FilterItem>
      </ul>
      <div className={styles.resetWrapper}>
        <Button className={styles.reset}>Сбросить все фильтры</Button>
      </div>
    </section>
  );
};

export default FilterList;
