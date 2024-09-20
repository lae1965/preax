import { URL_VACANCIES_CONSTANT_PART } from "@constants";
import { useVacancyStore } from "@store/vacancyStore";

export const prepareURL = () => {
  const filters = useVacancyStore.getState().filters;
  let URL = URL_VACANCIES_CONSTANT_PART;

  Object.keys(filters).forEach(key => {
    let str = '';
    if (Array.isArray(filters[key])) {
      if (key === 'text') str += `&${key}=Frontend`;
      filters[key].forEach(item => {
        if (key === 'text') str += `+${item}`;
        else str += `&${key}=${item}`
      });
    }
    else if (filters[key] !== 'none' && filters[key] !== false && key !== 'show_hidden') str = `&${key}=${filters[key]}`;
    if (str.length) URL += str;
  });

  return URL;
}