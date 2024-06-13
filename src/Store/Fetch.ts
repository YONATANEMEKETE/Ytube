import { create } from 'zustand';

type fetch = {
  isFetch: boolean;
  onFetch: () => void;
};

const useFetch = create<fetch>((set) => ({
  isFetch: false,
  onFetch: () => {
    set({ isFetch: true });
  },
}));

export default useFetch;
