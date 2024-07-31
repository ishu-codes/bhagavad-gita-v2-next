"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    // SelectValue,
} from "@/components/ui/select";
import { useLangStore } from "@/stores";
import { LanguageIcon } from "@/icons/NavIcons";

export default function LanguageSelect(params: { lang: Locale["code"] }) {
    const [currentLang, setCurrentLang] = useLangStore((state) => [
        state.currentLang,
        state.setCurrentLang,
    ]);
    // const [currentLanguage, _] = useState(params.lang);
    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        // setCurrentLang(params.lang);
        changeLang(params.lang);
    }, [params.lang]);

    const changeLang = (newLangCode: string) => {
        // if (!pathName) return "/";

        let validNewLang = i18n.locales.find(
            (locale) => locale.code === newLangCode
        );
        if (validNewLang) {
            setCurrentLang(validNewLang);

            const segments = pathName.split("/");
            segments[1] = newLangCode;
            const newPath = segments.join("/");
            router.push(newPath);
        } else {
            console.log("Invalid path!");
        }
    };
    return (
        <Select
            onValueChange={(newLangCode) => changeLang(newLangCode)}
            defaultValue={params.lang}
        >
            <SelectTrigger className="w-auto bg-secondary rounded-full outline-none">
                <LanguageIcon className="p-1" />
                <p className="hidden md:block text-lg text-secondary-foreground ml-2 mr-4">
                    {currentLang.local}
                </p>
            </SelectTrigger>
            <SelectContent>
                {i18n.locales.map((locale) => (
                    <SelectItem key={locale.code} value={locale.code}>
                        {locale.local}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
