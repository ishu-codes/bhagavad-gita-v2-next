import type { Metadata } from "next";
import { Yatra_One, Laila } from "next/font/google";
import { i18n, type Locale } from "@/i18n-config";
import { SystemIcons } from "@/icons";
import "./globals.css";
import { Navbar } from "@/components";

// const inter = Inter({ subsets: ["latin"] });
const yatraOne = Yatra_One({ weight: "400", subsets: ["devanagari"] });
const laila = Laila({ weight: "400", subsets: ["devanagari"] });

export const metadata: Metadata = {
    title: "Bhagavad Gita",
    description: "Your guide to a profound understanding of the Bhagavad Gita.",
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale.code }));
}

// const getLang = (langCode: Locale["code"]) => {
//     let newLang = i18n.locales.find((locale) => locale.code === langCode);
//     if (newLang) return newLang;
//     return getLang("hi");
// };

interface RootInterface {
    children: React.ReactNode;
    params: { lang: Locale["code"] };
}

export default function Root({ children, params }: RootInterface) {
    return (
        <html lang={params.lang}>
            <body className={laila.className}>
                <SystemIcons />
                <div className="w-full h-screen">
                    <Navbar lang={params.lang} />
                    {children}
                </div>
            </body>
        </html>
    );
}
