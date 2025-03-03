import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "light", // default to light theme
  setTheme: (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme); // Apply theme globally
    localStorage.setItem("theme", newTheme); // Store theme preference in localStorage
    set({ theme: newTheme }); // Update the store state
  },
}));
