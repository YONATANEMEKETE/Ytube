import { create } from 'zustand';

type CateGory = {
  category: number;
  changeNew: (newCategory: number) => void;
};

const useCategory = create<CateGory>((set) => ({
  category: 28,
  changeNew: (newCategory) => {
    set({ category: newCategory });
  },
}));

export default useCategory;
