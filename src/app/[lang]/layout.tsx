import type { Metadata } from "next";
import { Yatra_One, Noto_Sans as Laila } from "next/font/google";
import { i18n, type Locale } from "@/i18n-config";
import Icons from "@/icons";
import "./globals.css";
import { Navbar } from "@/components";

// const inter = Inter({ subsets: ["latin"] });
// const yatraOne = Yatra_One({ weight: "400", subsets: ["devanagari"] });
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
                <Icons />
                <Navbar lang={params.lang} />
                <div className="w-full h-screen pt-[5.5rem]">{children}</div>
            </body>
        </html>
    );
}
