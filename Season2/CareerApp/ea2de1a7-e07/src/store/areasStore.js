import { create } from 'zustand';

export const useAreasStore = create((set) => ({

  loading: false,
  areas: [],
  fetchAreas: async () => {
    try {
      set({ loading: true });
      const response = await fetch(
        `https://api.hh.ru/areas`
      );
      const data = await response.json();

      const citiesPool = []

      data[0].areas?.map((region) => {
        if (region.areas?.length === 0) {
          return citiesPool.push({ value: region.name, id: region.id, query: 'area' })
        }
        region.areas?.map((city) => {
          return citiesPool.push({ value: city.name, id: city.id, query: 'area' })
        })
      })

      set({ areas: citiesPool.sort((a, b) => (+a.id) - (+b.id)) });
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      set({ loading: false });
    }
  },
}));
