import { ThemeLight, ThemeDark, ThemeSystem } from "@/icons";

export const THEMES = [
    { name: "Light", icon: ThemeLight },
    { name: "Dark", icon: ThemeDark },
    { name: "System", icon: ThemeSystem },
];

export type Theme = (typeof THEMES)[number];
