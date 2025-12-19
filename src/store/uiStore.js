import { create } from "zustand";

export const useUIStore = create((set) => ({
  dark: false,
  toggleDark: () => set((state) => ({ dark: !state.dark }))
}));
