import type { Metadata } from "next";
import { Yatra_One, Noto_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { i18n, type Locale } from "@/i18n-config";
import { SystemIcons } from "@/icons";
import { Navbar } from "@/components";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const yatraOne = Yatra_One({ weight: "400", subsets: ["devanagari"] });
const fontSans = FontSans({
    weight: "400",
    subsets: ["devanagari"],
    variable: "--font-sans",
});

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
        <html lang={params.lang} suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <SystemIcons />
                <Navbar lang={params.lang} />
                <div className="w-full h-screen pt-[5.5rem]">{children}</div>
            </body>
        </html>
    );
}
