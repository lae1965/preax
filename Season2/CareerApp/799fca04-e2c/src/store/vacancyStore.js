import { create } from 'zustand';
import { formatVacancy } from '@utils/formatFetch';
import { formatDate } from '@utils/formatDate';
import { LIMIT_CARD_FOR_MAIN_PAGE } from '@constants';
import { prepareURL } from '@utils/prepareURL';
import { deepObjectCopy } from '@utils/deepObjectCopy';

const initialFilters = {
  area: [],
  employment: [],
  period: 'none',
  experience: 'none',
  schedule: [],
  text: [],
  education: [],
  salary: 'none',
  only_with_salary: false,
  part_time: [],
  label: [],
  show_hidden: false,
};

const getFilter = () => {
  const filter = sessionStorage.getItem('filters_of_Andrey_Lashkevich');
  if (filter) return JSON.parse(filter);
  return deepObjectCopy(initialFilters);
}

export const useVacancyStore = create((set, get) => ({
  blackList: [],
  pages: 0,
  page: 1,
  loading: false,
  vacancies: [],
  changeFilters: true,

  filters: getFilter(),

  clearChangeFilters: () => {
    set({ changeFilters: false });
  },

  clearFilters: () => {
    set({ filters: deepObjectCopy(initialFilters), changeFilters: true });
  },

  setValueToFilters: (key, value) => {
    const newFilters = get().filters;
    if (Array.isArray(newFilters[key])) newFilters[key].push(value);
    else if (typeof newFilters[key] === 'boolean') newFilters[key] = true;
    else newFilters[key] = value;
    set({ filters: newFilters, changeFilters: true });
  },

  deleteValueFromFilters: (key, value) => {
    const newFilters = get().filters;
    if (Array.isArray(newFilters[key])) {
      newFilters[key] = newFilters[key].filter(item => item !== value);
    } else if (typeof newFilters[key] === 'boolean') newFilters[key] = false;
    set({ filters: newFilters, changeFilters: true });
  },

  toggleToBlackList: (idBlock) => {
    const idInBlackList = get().blackList;
    const foundedId = idInBlackList.find((item) => item === idBlock);
    set({
      blackList: foundedId ? idInBlackList.filter((idItem) => idItem !== idBlock) : [...idInBlackList, idBlock]
    })
  },
  setPage: (newPage) => set({ page: newPage }),

  fetchVacancies: async (page = 0) => {
    try {
      set({ loading: true });
      const URL = prepareURL();
      const response = await fetch(`${URL}&page=${page}&per_page=${LIMIT_CARD_FOR_MAIN_PAGE}`);
      const data = await response.json();
      const groupedVacancies = {};

      data.items.forEach((item) => {
        const date = formatDate(item.published_at).result;
        if (!groupedVacancies[date]) {
          groupedVacancies[date] = { date: date, vacancies: [] };
        }
        groupedVacancies[date].vacancies.push(formatVacancy(item));
      });

      set({ vacancies: groupedVacancies, pages: data.pages });
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      set({ loading: false });
    }
  },
}));
