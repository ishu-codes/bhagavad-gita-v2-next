"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";
import { useLangStore } from "@/stores";
import logo from "@/assets/logo.svg";
import "./Navbar.css";

export default function Navbar(params: { lang: Locale["code"] }) {
    const setCurrentLang = useLangStore((state) => state.setCurrentLang);
    const [currentLanguage, _] = useState(params.lang);
    const pathName = usePathname();
    const router = useRouter();

    const changeLang = (event: ChangeEvent) => {
        if (!pathName) return "/";

        let element = event.currentTarget as HTMLInputElement;
        let newLangCode = element.value;

        let validNewLangCode = i18n.locales.find(
            (locale) => locale.code === newLangCode
        );
        if (validNewLangCode) {
            setCurrentLang(newLangCode);

            const segments = pathName.split("/");
            segments[1] = newLangCode;
            const newPath = segments.join("/");
            // console.log(newPath);
            router.push(newPath);
        } else {
            console.log("Invalid path!");
        }
    };

    useEffect(() => {
        setCurrentLang(params.lang);
    }, [params.lang]);

    return (
        <div className="w-full md:px-12 md:pt-4 fixed">
            <div className="navbar flex items-center justify-between px-4 md:px-6 py-2 bg-white md:rounded-2xl">
                <figure className="py-2">
                    <Link href={`/${currentLanguage}`}>
                        <img
                            className="h-8 md:h-10"
                            src={logo.src}
                            alt="logo"
                        />
                    </Link>
                </figure>
                <div className="hidden md:flex items-center space-x-4">
                    <Link className="p-1" href={`/${currentLanguage}/search`}>
                        <svg className="button-icon-light w-12 h-12 p-2 border-2 border-zinc-100 rounded-full">
                            <use xlinkHref="#search"></use>
                        </svg>
                    </Link>
                    <div className="px-2 py-1 flex border-2 border-zinc-100 rounded-full button-icon-light">
                        <div>
                            <svg className="w-8 h-8 p-1">
                                <use xlinkHref="#lang"></use>
                            </svg>
                        </div>
                        <select
                            name="lang"
                            id="lang"
                            className="px-2 font-medium text-lg outline-none"
                            onChange={(e) => changeLang(e)}
                            defaultValue={currentLanguage}
                        >
                            {i18n.locales.map((locale) => (
                                <option key={locale.code} value={locale.code}>
                                    {locale.local}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
