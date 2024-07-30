import Link from "next/link";
import type { Locale } from "@/i18n-config";
import LanguageSelect from "./LanguageSelect";
import ThemeSelect from "./ThemeSelect";
import SearchBar from "./SearchBar";
import logo from "@/assets/logo.svg";
import "./Navbar.css";

export default function Navbar(params: { lang: Locale["code"] }) {
    return (
        <header className="navbar bg-background fixed w-full flex items-center justify-between px-4 md:px-6 py-2">
            <figure className="py-2">
                <Link href={`/${params.lang}`}>
                    <img className="h-8 md:h-10" src={logo.src} alt="logo" />
                </Link>
            </figure>
            <SearchBar />
            <div className="hidden md:flex items-center space-x-4">
                <LanguageSelect lang={params.lang} />
                <ThemeSelect />
            </div>
        </header>
    );
}
