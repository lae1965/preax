import { useState } from 'react';

import FilterContext from './filterContext';

export const FilterProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [workDuration, setWorkDuration] = useState('');
  const [additionalStates, setAdditionalStates] = useState('');

  return (
    <FilterContext.Provider
      value={{
        city,
        setCity,
        workDuration,
        setWorkDuration,
        additionalStates,
        setAdditionalStates,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
