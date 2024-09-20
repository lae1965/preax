import { create } from 'zustand'

export const usePageStore = create((set) => ({
  curPaginationPage: 1,
  setCurPaginationPage: (page) => set({ curPaginationPage: page }),
}));
