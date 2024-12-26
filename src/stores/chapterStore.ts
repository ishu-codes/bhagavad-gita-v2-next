import { create } from "zustand";

interface currentChapterStore {
  chId: string;
  setChId: (newChId: string) => void;
}

const useCurrentChapterStore = create<currentChapterStore>((set) => ({
  chId: "ch01",
  setChId: (newChId: string) =>
    set({
      chId: newChId,
    }),
}));

export { useCurrentChapterStore };
