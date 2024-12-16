import Link from "next/link";
// import { redirect } from "next/navigation";
import { Laila as Yatra_One } from "next/font/google";
import { cn } from "@/lib/utils";
import { type Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import {
    AudioIcon,
    BookmarkIcon,
    DownloadIcon,
    FavouriteIcon,
    ShareIcon,
} from "@/icons/VerseIcons";
import { Button } from "./ui/button";
import {
    BookmarksIcon,
    ChaptersIcon,
    FavouritesIcon,
    ForwardIcon,
    RandomIcon,
    VersesIcon,
} from "@/icons/HomeIcons";

const yatraOne = Yatra_One({
    weight: "400",
    subsets: ["devanagari"],
    variable: "--font-yatra",
});

const sections = [
    {
        name: "Explore",
        subsections: [
            { name: "Chapters", href: "chapters", icon: ChaptersIcon },
            { name: "Verses", href: "verses", icon: VersesIcon },
            { name: "Random", href: "random", icon: RandomIcon },
        ],
    },
    {
        name: "Personalized",
        subsections: [
            { name: "Bookmarks", href: "bookmarks", icon: BookmarksIcon },
            { name: "Favourites", href: "favourites", icon: FavouritesIcon },
        ],
    },
];
const blogs = [
    "श्रीमद्भगवद्गीता क्या है ?",
    "श्रीमद्भगवद्गीता का भगवान कौन है ?",
];

const verse = {
    verse: [
        "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
        "अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।। ४/७",
    ],
    transliteration: "",
    meaning:
        "हे भारतवंशी! जब-जब सत्धर्म की हानि और अधर्म की वृद्धि होती है, तब ही मैं स्वयं जन्म लेता हूँ।",
};
const verseIcons = [
    { name: "Bookmark", icon: BookmarkIcon, isActive: false, action: null },
    { name: "Favourite", icon: FavouriteIcon, isActive: true, action: null },
    { name: "Audio", icon: AudioIcon, isActive: false, action: null },
    { name: "Download", icon: DownloadIcon, action: null },
    { name: "Share", icon: ShareIcon, action: null },
];

export default async function Home(props: { lang: Locale["code"] }) {
    let dictionary = await getDictionary(props.lang);
    return (
        <div className="w-full bg-background text-foreground flex flex-col md:flex-row pt-6">
            <div className="left flex-grow space-y-14 py-4">
                {sections.map((section, index) => (
                    <div
                        className="flex flex-col items-center space-y-2"
                        key={index}
                    >
                        <h1
                            className="text-2xl font-bold uppercase font-yatra"
                            // className={cn(
                            //     "text-2xl font-bold uppercase",
                            //     yatraOne.variable
                            // )}
                        >
                            {section.name}
                        </h1>
                        <div className="w-full flex justify-evenly">
                            {section.subsections.map((subsec, index) => (
                                <div
                                    className="flex flex-col items-center"
                                    key={index}
                                >
                                    <Link
                                        className="p-2 rounded-full hover:bg-accent"
                                        href={`/${props.lang}/${subsec.href}`}
                                    >
                                        <subsec.icon className="p-2" />
                                    </Link>
                                    <h2 className="text-center text-lg text-secondary-foreground font-medium font-yatra">
                                        {subsec.name}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="flex flex-col items-center px-24 space-y-4">
                    <h1
                        // className={cn(
                        //     "text-2xl font-bold uppercase",
                        //     yatraOne.variable
                        // )}
                        className={`text-2xl font-bold uppercase font-yatra`}
                    >
                        Blogs
                    </h1>
                    <div className="w-full flex items-center px-6 py-4 rounded-xl border-2 border-border">
                        <div className="w-full flex-grow flex flex-col text-secondary-foreground">
                            {blogs.map((blog, index) => (
                                <h2 className="text-lg" key={index}>
                                    {blog}
                                </h2>
                            ))}
                        </div>
                        <Link
                            href={`/${props.lang}/blogs`}
                            className="hover:bg-accent rounded-full"
                        >
                            <ForwardIcon className="p-2" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Verse Section */}

            <div className="w-1/2 flex flex-col items-center border-l-2 border-border pt-4">
                <h1 className="text-2xl font-bold uppercase font-yatra">
                    Verse of the day
                </h1>
                <div className="w-full flex flex-col items-center px-32 py-4 space-y-6">
                    <div className="w-full text-center p-4 text-2xl rounded-x font-yatra">
                        {verse.verse.map((part, index) => (
                            <h2 key={index}>{part}</h2>
                        ))}
                    </div>
                    <p className="hidden md:block w-full text-center text-secondary-foreground text-[1.4rem] font-medium px-4 leading-10">
                        {/* {verse.meaning} */}
                        {dictionary["verse_meaning"]}
                    </p>
                    <div className="hidden md:flex w-full justify-evenly">
                        {verseIcons.map((icon, index) => (
                            <Button
                                key={index}
                                variant={"ghost"}
                                className="h-auto p-1 md:p-2 rounded-full"
                            >
                                <icon.icon className="p-2" />
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
