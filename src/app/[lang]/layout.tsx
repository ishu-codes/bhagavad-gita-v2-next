import type { Metadata } from "next";
import { Yatra_One, Noto_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { i18n, type Locale } from "@/i18n-config";
import { Navbar } from "@/components";
import { ThemeProvider } from "@/components/theme-provider";
import { getDictionary } from "../../get-dictionary";

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

export default async function Root({ children, params }: RootInterface) {
    const dictionary = await getDictionary(params.lang);
    return (
        <html lang={params.lang} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Yatra+One&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href={dictionary.font.url} />
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Yatra+One&display=swap"
                    rel="stylesheet"
                /> */}
            </head>
            <body
                className="min-h-screen antialiased font-noto-sans"
                // className={cn(
                //     "min-h-screen font-sans antialiased",
                //     fontSans.variable
                // )}
                style={{ fontFamily: ` ${dictionary.font.family}` }}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="w-full h-full bg-background text-foreground">
                        <Navbar lang={params.lang} />
                        <div className="w-full h-screen pt-[4.5rem]">
                            {children}
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
