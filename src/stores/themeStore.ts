import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Theme, THEMES } from "@/data/themesData";

interface ThemeStore {
    currentTheme: Theme["name"];
    setCurrentTheme: (newThemeName: string) => void;
}

const useThemeStore = create(
    persist<ThemeStore>(
        (set, get) => ({
            currentTheme: THEMES[0].name,
            setCurrentTheme: (newThemeName: string) => {
                let newTheme = THEMES.find(
                    (them) => them.name === newThemeName
                );
                if (newTheme)
                    return void set({
                        currentTheme: newTheme.name,
                    });
            },
            // setCurrentTheme: (newTheme: string) =>
            //     set(() => ({
            //         currentTheme: newTheme,
            //     })),
        }),
        {
            name: "theme",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useThemeStore;
