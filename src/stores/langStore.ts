import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { i18n, type Locale } from "@/i18n-config";

// const langs = i18n.locales;

interface LangStore {
    currentLang: Locale;
    setCurrentLang: (newLang: Locale) => void;
}

const useLangStore = create(
    persist<LangStore>(
        (set, get) => ({
            currentLang: i18n.defaultLocale,
            setCurrentLang: (newLang: Locale) =>
                set({
                    currentLang: newLang,
                }),
            // setCurrentLang: (newLangCode: string) => {
            //     let newLang = langs.find((lang) => lang.code === newLangCode);
            //     if (newLang)
            //         return void set({
            //             currentLang: newLang,
            //         });
            // },
        }),
        {
            name: "langState",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useLangStore;
