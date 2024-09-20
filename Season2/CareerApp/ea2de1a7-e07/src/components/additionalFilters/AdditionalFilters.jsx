import { useState } from 'react';
import FilterItem from '@components/filterList/filterItem/FilterItem';
import Checkbox from '@components/checkbox/Checkbox';
import NestedLayout from '@components/nestedLayout/NestedLayout';
import { useQuerySearchParams } from '@store/querySearchParams';

const AdditionalFilters = ({ list, onChange, chekeced, handleChangeRadio }) => {
  const [isOpenFilter, setIsOpenFilter] = useState(() =>
    Object.fromEntries(list.map((_, index) => [index, false]))
  );
  const { queryParams } = useQuerySearchParams();
  const toggleFilter = (e, index) => {
    e.stopPropagation();
    setIsOpenFilter((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return list.map((item, index) => (
    <FilterItem
      key={index}
      iconName={item.icon}
      text={item.title}
      isOpenFilter={isOpenFilter[index]}
      level='low'
      count={queryParams.filter(activeQuery => (activeQuery.query === item.query || ( activeQuery.query === 'only_with_salary' && item.query === 'salary')) && !activeQuery.withOutUrl).length}
      onClick={(e) => {
        toggleFilter(e, index);
      }}
    >
      <NestedLayout>
        {item.radio && <Checkbox list={item.radio} type='radio' onChange={handleChangeRadio} chekeced={chekeced} />}
        {item.checkbox && (
          <Checkbox list={item.checkbox} type='checkbox' onChange={onChange} chekeced={chekeced} />
        )}
      </NestedLayout>
    </FilterItem>
  ));
};

export default AdditionalFilters;
