import { create } from "zustand";

interface CreatorSidebarStore {
  collapsed: boolean;
  onExand: () => void;
  onCollapse: () => void;
}

export const useCreatorSidebar = create<CreatorSidebarStore>((set) => ({
  collapsed: true,
  onExand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
}));
