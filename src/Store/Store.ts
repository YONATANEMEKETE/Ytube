import { create } from 'zustand';

type SideProp = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useSidebar = create<SideProp>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
  },
  onClose: () => {
    set({ isOpen: false });
  },
}));

export default useSidebar;
