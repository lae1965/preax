import { create } from "zustand";

export const useQuerySearchParams = create((set, get) => ({
  queryParams: [],
  blackList: false,
  removeQueryParams: () => set({ queryParams: [] }),
  writeQueryParams: (newQuery) => set({ queryParams: newQuery }),
  addCheckboxParams: (item) => set((state) => ({ queryParams: state.queryParams.map(res => res.id).includes(item.id) ? state.queryParams.filter(res => res.id !== item.id) : [...state.queryParams, item] })),
  addRadioParams: (item) => set((state) => ({ queryParams: state.queryParams.map(res => res.query).includes(item.query) ? [...state.queryParams.filter(res => res.query !== item.query), item] : [...state.queryParams, item] })),
  toggleBlackList: () => {
    const queryParams = get().queryParams
    set({ blackList: queryParams.map(res => res.id).includes('hidden') ? true : false })
  },
  resetBalckList: () => set({ blackList: false })
}));
