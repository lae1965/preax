import { useContext } from 'react';
import FilterContext from '../context/filterContext';

export const useFilter = () => useContext(FilterContext);
