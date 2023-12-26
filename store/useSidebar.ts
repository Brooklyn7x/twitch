import { create } from "zustand";

interface SidebarStore {
  collapsed: boolean;
  onExand: () => void;
  onCollapse: () => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
  collapsed: false,
  onExand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
}));
