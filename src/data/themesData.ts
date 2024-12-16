import { ThemeLight, ThemeDark, ThemeSystem } from "@/icons/ThemeIcons";

export const THEMES = [
    { name: "system", icon: ThemeSystem },
    { name: "light", icon: ThemeLight },
    { name: "dark", icon: ThemeDark },
];

export type Theme = (typeof THEMES)[number];
