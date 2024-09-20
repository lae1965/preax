import { create } from 'zustand'
import { groupResultVacancyByDate, schemeResultVacancy } from '@utils/parse-vacancy';

const defQuery = 'frontend';
const defPerPage = '18';
const defSort = 'publication_time';

const fetchAPI = async (api) => {
  try {
    const response = await fetch(api);
    if (!response.ok) throw new Error('Что-то пошло не так. Попробуйте позже');
    return await response.json();
  } catch (e) {
    if (e.name === 'TypeError') {
      throw new Error('Ошибка в запросе');
    } else {
      throw e;
    }
  }
}

export const useVacancyStore = create((set, get) => ({
  vacancyList: [],
  blackList: [],
  vacancy: {},
  pagesCount: 1,
  loading: false,
  error: '',
  setToBlackList: (vacancyId) => {
    const stopList = get().blackList
    set({ blackList: [...stopList, vacancyId] })
  },
  toggleToBlackList: (idBlock) => {
    const idInBlackList = get().blackList
    const foundedId = idInBlackList.find((item) => item === idBlock);
    set({
      blackList: foundedId ? idInBlackList.filter((idItem) => idItem !== idBlock) : [...idInBlackList, idBlock]
    })
  },
  fetchVacancyList: async (page = 1, today = false, otherQuery = '', withBlackList = false) => {
    try {
      set({ loading: true });
      set({ error: '' })
      const url = `https://api.hh.ru/vacancies/?page=${page}&per_page=${defPerPage}&order_by=${defSort}`
      const result = await fetchAPI(`${url}${otherQuery}`);
      const res = schemeResultVacancy(result.items, withBlackList ? [] : get().blackList);
      const group = groupResultVacancyByDate(res);
      set({ vacancyList: today ? [group[0]] : group, pagesCount: result.pages });
    } catch (e) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },
  fetchVacancy: async (id) => {
    if (!id) return;
    try {
      const result = await fetchAPI(`https://api.hh.ru/vacancies/${id}`);
      set({
        vacancy: {
          id,
          name: result.name,
          description: result.description,
          experience: result.experience.name,
          employment: result.employment.name,
          skills: result.key_skills,
          salary: result.salary,
          logoURL: result.employer.logo_urls?.['240'],
          employerName: result.employer.name,
          schedule: result.schedule?.name,
          published: `Вакансия опубликована ${new Date(result.created_at).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).slice(0, -3)} в г. ${result.area.name}`,
          address: `г. ${result.address ? result.address.raw : result.area.name}`
        }
      })
    } catch (e) {
      set({ error: e.message });
    }
  },
  fetchSimilarVacancy: async (id, page = 1) => {
    if (!id) return null;
    try {
      set({ loading: true });
      const result = await fetchAPI(`https://api.hh.ru/vacancies/${id}/similar_vacancies/?text=${defQuery}&page=${page}&per_page=6`);
      return schemeResultVacancy(result.items);
    } catch (e) {
      set({ error: e.message });
      return null;
    } finally {
      set({ loading: false });
    }
  }
}));

