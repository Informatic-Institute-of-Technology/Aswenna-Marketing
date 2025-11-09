import { create } from 'zustand';

interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  introVideoPlayed: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  markIntroVideoPlayed: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  theme: 'light',
  introVideoPlayed: localStorage.getItem('introVideoPlayed') === 'true',
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setTheme: (theme) => set({ theme }),
  markIntroVideoPlayed: () => {
    localStorage.setItem('introVideoPlayed', 'true');
    set({ introVideoPlayed: true });
  },
}));
