import { create } from 'zustand'

export const currPage = {
  main: 1,
  vacancy: 2,
}

export const usePageStore = create((set) => ({
  currentPage: currPage.main,
  curPaginationPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
  setCurPaginationPage: (page) => set({ curPaginationPage: page }),
}));
