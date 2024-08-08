import dynamic from "next/dynamic";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import LanguageSelect from "./LanguageSelect";
// import ThemeSelect from "./ThemeSelect";
import SearchBar from "./SearchBar";
import logo from "@/assets/logo.svg";
import logoLight from "@/assets/logo-light.svg";
import "./Navbar.css";

const DynamicThemeSelect = dynamic(() => import("./ThemeSelect"), {
    ssr: false,
});

export default function Navbar(params: { lang: Locale["code"] }) {
    return (
        <header
            className="navbar fixed w-full flex items-center justify-between px-4 md:px-6 py-2"
            style={{ backdropFilter: "blur(8px)" }}
        >
            <figure className="py-2">
                <Link href={`/${params.lang}`}>
                    <img
                        className="h-8 md:h-10 dark:hidden"
                        src={logo.src}
                        alt="logo"
                    />
                    <img
                        className="h-8 md:h-10 hidden dark:block"
                        src={logoLight.src}
                        alt="logo"
                    />
                </Link>
            </figure>
            <SearchBar />
            <div className="hidden md:flex items-center space-x-4">
                <LanguageSelect lang={params.lang} />
                <DynamicThemeSelect />
            </div>
        </header>
    );
}
