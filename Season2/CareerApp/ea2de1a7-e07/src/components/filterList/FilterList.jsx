import React, { useEffect, useState } from 'react';

import styles from './FilterList.module.css';

import FilterItem from './filterItem/FilterItem';
import ModalLayout from '@components/modalLayout/ModalLayout';
import AdditionalFilters from '@components/additionalFilters/AdditionalFilters';
import Checkbox from '@components/checkbox/Checkbox';
import Button from '@components/button/Button';
import { briefCase, otherFiltersData } from '@data/filterData';
import { useClickOutside } from '@hooks/useClickOutside';
import Icon from '@components/icon/Icon';
import { useAreasStore } from '@store/areasStore';
import Dropdown from '@components/dropdown/Dropdown';
import { useQuerySearchParams } from '@store/querySearchParams';
import { useRoute } from '@hooks/useRoute';
import { FilterCounter } from './filterCounter/filterCounter';
import { usePageStore } from '@store/pageStore';
import { useVacancyStore } from '@store/vacancyStore';
import { useGetWindowWidth } from '@hooks/useGetWindowWidth';

const FilterList = () => {
  const [showBriefCase, setShowBriefCase] = useState(false);
  const [showAdditionalFilters, setShowAdditionalFilters] = useState(false);
  const [value, setValue] = useState('');
  const [cityPool, setCityPool] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { fetchVacancyList } = useVacancyStore();
  const { curPaginationPage, setCurPaginationPage } = usePageStore();

  const { areas, fetchAreas } = useAreasStore();
  const {
    queryParams,
    addCheckboxParams,
    addRadioParams,
    removeQueryParams,
    toggleBlackList,
    resetBalckList,
  } = useQuerySearchParams();

  const { addCheckboxQueryParam, resetQueryParam } = useRoute();
  const windowWidth = useGetWindowWidth();
  const refInput = useClickOutside(() => {
    setIsDropdownOpen(false);
  });
  const refWork = useClickOutside(() => {
    setShowAdditionalFilters(false);
  });
  const refOther = useClickOutside(() => {
    setShowBriefCase(false);
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChangeCheckbox = (item) => {
    addCheckboxParams(item);
    toggleBlackList();
  };
  const handleChangeRadio = (item) => {
    addRadioParams(item);
  };

  const checkCheckBox = (item) => {
    const val = queryParams.filter((item) => item.query !== 'area');
    return (
      queryParams
        .filter((item) => item.query !== 'area')
        .map((res) => res.query)
        .includes(item.query) &&
      queryParams
        .filter((item) => item.query !== 'area')
        .map((res) => res.id)
        .includes(item.id)
    );
  };

  const checkCheckBoxArea = (item) => {
    const val = queryParams.filter((item) => item.query === 'area');
    return (
      queryParams
        .filter((item) => item.query === 'area')
        .map((res) => res.query)
        .includes(item.query) &&
      queryParams
        .filter((item) => item.query === 'area')
        .map((res) => res.id)
        .includes(item.id)
    );
  };

  useEffect(() => {
    if (value.length > 0) {
      setIsDropdownOpen(true);
    }
    setCityPool(
      areas.filter(
        (item) => item.value.toLowerCase().indexOf(value.toLowerCase()) > -1
      )
    );
  }, [value]);

  useEffect(() => {
    fetchAreas();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      addCheckboxQueryParam(queryParams);
    }, 0);
  }, [queryParams]);

  const resetQuery = () => {
    removeQueryParams();
    resetQueryParam();
    resetBalckList();
    setValue('');
    setCurPaginationPage(1);
    fetchVacancyList(curPaginationPage - 1, false, '&text=frontend', false);
  };

  return (
    <section className={styles.wrapper}>
      <ul
        className={`${styles.list} ${
          queryParams.length === 0 ? styles.addMargin : ''
        }`}
      >
        <li
          className={styles.inputWrapper}
          ref={refInput}
          data-hidden={showAdditionalFilters}
        >
          <Icon name={'plane'} className={styles.icon} />
          <input
            type='text'
            className={`
            ${styles.input} 
            ${
              (value.length > 2 && isDropdownOpen && cityPool.length > 0) ||
              (queryParams.filter((item) => item.query === 'area').length > 0 &&
                value.length < 3 &&
                isDropdownOpen)
                ? styles.isActive
                : ''
            }
            `}
            placeholder={'Город'}
            value={value}
            onChange={handleChange}
            onClick={() => {
              setIsDropdownOpen(true);
            }}
          />
          {!!value && (
            <Icon
              name={'clear'}
              onClick={() => setValue('')}
              className={`${styles.clearIcon} ${
                queryParams.filter((item) => item.query === 'area').length > 0
                  ? styles.isCounter
                  : ''
              }`}
            />
          )}
          {queryParams.filter((item) => item.query === 'area').length > 0 && (
            <FilterCounter
              count={queryParams.filter((item) => item.query === 'area').length}
              className={styles.counter}
            />
          )}
          <Dropdown className={styles.dropdown}>
            {value.length > 2 && isDropdownOpen && cityPool.length > 0 && (
              <ul className={styles.citiPool}>
                {cityPool.map((item) => (
                  <li key={item.id}>
                    <input
                      className={styles.checkbox}
                      type={'checkbox'}
                      checked={checkCheckBoxArea(item)}
                      id={item.id}
                      name={item.value}
                      onChange={() => {
                        handleChangeCheckbox(item);
                      }}
                    />
                    <label htmlFor={item.id} className={styles.label}>
                      {item.value}
                    </label>
                  </li>
                ))}
              </ul>
            )}

            {queryParams.filter((item) => item.query === 'area').length > 0 &&
              value.length < 3 &&
              isDropdownOpen && (
                <ul className={styles.citiPool}>
                  {areas.map(
                    (item) =>
                      checkCheckBoxArea(item) && (
                        <li key={item.id}>
                          <input
                            className={styles.checkbox}
                            type={'checkbox'}
                            checked={checkCheckBoxArea(item)}
                            id={item.id}
                            name={item.value}
                            onChange={() => {
                              handleChangeCheckbox(item);
                            }}
                          />
                          <label htmlFor={item.id} className={styles.label}>
                            {item.value}
                          </label>
                        </li>
                      )
                  )}
                </ul>
              )}
          </Dropdown>
        </li>
        {windowWidth > 1023 && (
          <FilterItem
            iconName='briefCase'
            text='Тип занятости'
            onClick={() => {
              setShowBriefCase(!showBriefCase);
            }}
            ref={refOther}
            isOpenFilter={showBriefCase}
            count={
              queryParams.filter((item) => item.query === 'employment').length
            }
            level='high'
          >
            <ModalLayout className={styles.briefCase}>
              <Checkbox
                list={briefCase}
                onChange={handleChangeCheckbox}
                chekeced={checkCheckBox}
              />
            </ModalLayout>
          </FilterItem>
        )}
        <FilterItem
          className={styles.additional}
          fullWidth={showAdditionalFilters}
          hidden={isDropdownOpen}
          iconName='filter'
          text='Дополнительные фильтры'
          onClick={() => {
            setShowAdditionalFilters(!showAdditionalFilters);
          }}
          ref={refWork}
          isOpenFilter={showAdditionalFilters}
          level='high'
          count={
            queryParams.filter((item) => {
              if (
                item.query === 'area' ||
                item.withOutUrl ||
                (windowWidth > 1023 && item.query === 'employment')
              )
                return false;
              return true;
            }).length
          }
        >
          <ModalLayout>
            <AdditionalFilters
              list={
                windowWidth > 1023
                  ? otherFiltersData.slice(1)
                  : otherFiltersData
              }
              onChange={handleChangeCheckbox}
              chekeced={checkCheckBox}
              handleChangeRadio={handleChangeRadio}
            />
          </ModalLayout>
        </FilterItem>
      </ul>
      {queryParams.length > 0 && (
        <div className={styles.resetWrapper}>
          <Button
            className={styles.reset}
            onClick={() => {
              resetQuery();
            }}
          >
            Сбросить все фильтры
          </Button>
        </div>
      )}
    </section>
  );
};

export default FilterList;
