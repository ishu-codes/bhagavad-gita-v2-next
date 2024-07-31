"use client";

import { useEffect, useState } from "react";
import { THEMES, Theme } from "@/data/themesData";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    // SelectValue,
} from "@/components/ui/select";
import { ThemeLight } from "@/icons";

import { useTheme } from "next-themes";

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
    const [currentTheme, setCurrentTheme] = useState(
        // (typeof localStorage !== "undefined" &&
        localStorage?.getItem("theme") || ""
    );

    const { setTheme } = useTheme();
    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        setCurrentTheme(newTheme);
    };
    return (
        <Select
            onValueChange={(newTheme) => handleThemeChange(newTheme)}
            defaultValue={currentTheme}
        >
            <SelectTrigger className="w-[80px] rounded-full outline-none">
                <ThemeIcon themeName={currentTheme} className="p-1" />
            </SelectTrigger>
            <SelectContent>
                {THEMES.map((theme, index) => (
                    <SelectItem key={index} value={theme.name}>
                        {theme.name.slice(0, 1).toUpperCase() +
                            theme.name.slice(1)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
