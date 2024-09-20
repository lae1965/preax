import { create } from "zustand";

export const useRouter = create((set) => ({
  path: window.location.pathname,
  setPath: (newPath) => set({ path: newPath }),
  navigate: (newPath) => {
    window.history.pushState({}, '', newPath);
    set({ path: newPath });
  },
  goBack: () => history.go(-1)
}));

