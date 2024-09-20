import { create } from "zustand";
import { vacancyAPI } from "../api";

export const useVacancyStore = create(set => ({
  vacancy: [],
  isLoading: false,
  error: '',
  fetchVacancyDefault: async () => {
    set({ isLoading: true });
    try {
      const vacancyData = await vacancyAPI('', true);
      set({ vacancy: vacancyData, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
      throw error;
    }
  },
  fetchVacancy: async (city) => {
    set({ isLoading: true });
    try {
      const vacancyData = await vacancyAPI(city);
      set({ vacancy: vacancyData, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
      throw error;
    }
  },
}));