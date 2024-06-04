"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";

export default function LocaleSwitcher() {
    const pathName = usePathname();
    const redirectedPathName = (locale: Locale) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale.code;
        return segments.join("/");
    };

    return (
        <div>
            <p>Locale switcher:</p>
            <ul>
                {i18n.locales.map((locale) => {
                    return (
                        <li key={locale.code}>
                            <Link href={redirectedPathName(locale)}>
                                {locale.code}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
