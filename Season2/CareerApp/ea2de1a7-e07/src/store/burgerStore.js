import { create } from 'zustand';

export const useBurgerStore = create((set, get) => ({
  isBurgerOpen: false,
  setIsBurgerOpen: (isOpen) => set({ isBurgerOpen: isOpen }),
  toggleIsBurgerOpen: () => {
    set({ isBurgerOpen: !get().isBurgerOpen })
  }
}));
