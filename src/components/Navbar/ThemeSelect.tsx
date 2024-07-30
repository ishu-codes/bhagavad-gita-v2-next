"use client";

import { useEffect } from "react";
import { THEMES, Theme } from "@/data/themesData";
import { useThemeStore } from "@/stores";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    // SelectValue,
} from "@/components/ui/select";
import { ThemeLight } from "@/icons";

function ThemeIcon({
    themeName,
    className,
}: {
    themeName: Theme["name"];
    className?: string;
}) {
    const theme = THEMES.find((them) => them.name === themeName);
    if (theme) return <theme.icon className={className || ""} />;
    return <ThemeLight className={className || ""} />;
}

export default function ThemeSelect() {
    const [currentTheme, setCurrentTheme] = useThemeStore((state) => [
        state.currentTheme,
        state.setCurrentTheme,
    ]);

    useEffect(() => {
        // console.log("rerendering theme select");
    }, [currentTheme]);
    return (
        <Select
            onValueChange={(newTheme) => setCurrentTheme(newTheme)}
            defaultValue={currentTheme}
        >
            <SelectTrigger className="w-[80px] rounded-full outline-none">
                <ThemeIcon themeName={currentTheme} className="p-1" />
            </SelectTrigger>
            <SelectContent>
                {THEMES.map((theme, index) => (
                    <SelectItem key={index} value={theme.name}>
                        {theme.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
