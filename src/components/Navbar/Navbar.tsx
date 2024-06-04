"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";
import { useLangStore } from "@/stores";
import logo from "@/assets/logo.svg";
import "./Navbar.css";

export default function Navbar(params: { lang: Locale["code"] }) {
    const [currentLang, setCurrentLang] = useLangStore((state) => [
        state.currentLang,
        state.setCurrentLang,
    ]);
    const [currentLanguage, setCurrentLanguage] = useState(params.lang);
    const pathName = usePathname();
    const router = useRouter();

    // const redirectedPathName = (locale: Locale) => {
    //     if (!pathName) return "/";
    //     const segments = pathName.split("/");
    //     segments[1] = locale;
    //     return segments.join("/");
    // };

    const changeLang = (event: ChangeEvent) => {
        console.log(event);
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
            console.log(newPath);
            router.push(newPath);
        } else {
            console.log("Invalid path!");
        }
    };

    useEffect(() => {
        setCurrentLang(params.lang);
        console.log("useEffect runned!");
    }, [params.lang]);

    return (
        <div className="w-full px-4 md:px-12 pt-4 sticky">
            <div className="navbar flex items-center justify-between px-6 py-2 bg-white rounded-2xl">
                <figure className="h-10">
                    <img className="h-10" src={logo.src} alt="logo" />
                </figure>
                <div className="flex items-center space-x-4">
                    {/* <div className="icon"> */}
                    <Link className="p-1" href="/search">
                        <svg className="button-icon w-12 h-12 p-2 border-2 border-zinc-100 rounded-full">
                            <use xlinkHref="#search"></use>
                        </svg>
                    </Link>
                    {/* </div>  */}
                    <div className="px-2 py-1 flex border-2 border-zinc-100 rounded-full button-icon">
                        <div>
                            <svg className="w-8 h-8 p-1">
                                <use xlinkHref="#lang"></use>
                            </svg>
                        </div>
                        <select
                            name="lang"
                            id="lang"
                            className="px-2 outline-none"
                            onChange={(e) => changeLang(e)}
                            defaultValue={currentLanguage}
                        >
                            {/* <option value="volvo">Volvo</option> */}
                            {i18n.locales.map((locale) => (
                                <option
                                    key={locale.code}
                                    value={locale.code}
                                    // selected={locale.code === currentLang.code}
                                >
                                    {locale.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
