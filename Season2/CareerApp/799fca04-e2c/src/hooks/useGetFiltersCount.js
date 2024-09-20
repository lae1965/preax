import { useVacancyStore } from "@store/vacancyStore";

export const useGetFiltersCount = (name) => {
  const filters = useVacancyStore(state => state.filters);

  if (name === 'additional') {
    let count = 0;
    Object.keys(filters).forEach(key => {
      if (Array.isArray(filters[key])) {
        if (key !== 'area' && key !== 'employment') count += filters[key].length;
      }
      else if (filters[key] !== 'none' && filters[key] !== false) count++;
    });
    return count;
  }

  if (name === 'salary') return +(filters[name] !== 'none') + +(filters['only_with_salary']);

  if (Array.isArray(filters[name])) return filters[name].length;

  if (filters[name] === 'none' || filters[name] === false) return 0;

  return 1;
}