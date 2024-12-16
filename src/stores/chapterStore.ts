import { create } from "zustand";
import { chaptersData } from "@/data/chaptersData";

interface currentChapterStore {
    currentChapterId: string;
    setCurrentChapterId: (newChapterId: string) => void;
}

const useCurrentChapterStore = create<currentChapterStore>((set) => ({
    currentChapterId: "ch01",
    setCurrentChapterId: (newChapterId: string) => {
        let newChapter = chaptersData.find((ch) => ch.id == newChapterId);
        if (newChapter)
            return void set({
                currentChapterId: newChapterId,
            });
    },
}));

export { useCurrentChapterStore };
