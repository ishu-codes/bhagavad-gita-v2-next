import Link from "next/link";
// import { redirect } from "next/navigation";
import { Yatra_One } from "next/font/google";
import { type Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const yatraOne = Yatra_One({ weight: "400", subsets: ["devanagari"] });

const sections = [
    {
        name: "Explore",
        subsections: [
            { name: "Chapters", href: "chapters", icon: "chapters" },
            { name: "Verses", href: "verses", icon: "verses" },
            { name: "Random", href: "random", icon: "random" },
        ],
    },
    {
        name: "Personalized",
        subsections: [
            { name: "Bookmarks", href: "bookmarks", icon: "bookmarks" },
            { name: "Favourites", href: "favourites", icon: "heart" },
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
    { name: "Bookmark", icon: "bookmark", isActive: false, action: null },
    { name: "Favourite", icon: "heart", isActive: true, action: null },
    { name: "Audio", icon: "audio", isActive: false, action: null },
    { name: "Download", icon: "download", action: null },
    { name: "Share", icon: "share", action: null },
];

export default async function Home(props: { lang: Locale["code"] }) {
    let dictionary = await getDictionary(props.lang);
    return (
        <div className="w-full flex flex-col md:flex-row pt-8">
            <div className="left flex-grow space-y-12 pb-4">
                {sections.map((section, index) => (
                    <div
                        className="flex flex-col items-center space-y-4"
                        key={index}
                    >
                        <h1
                            className={`text-2xl font-bold uppercase ${yatraOne.className}`}
                        >
                            {section.name}
                        </h1>
                        <div className="w-full flex justify-evenly">
                            {section.subsections.map((subsec, index) => (
                                <div
                                    className="flex flex-col items-center space-y-2"
                                    key={index}
                                >
                                    <Link
                                        className="button-icon-dark w-[4.5rem] h-[4.5rem] p-3 bg-[#F0F6FC] border-2 border-[#C8D3DB] rounded-full"
                                        href={`/${props.lang}/${subsec.href}`}
                                    >
                                        <svg className="w-full h-full">
                                            <use
                                                xlinkHref={`#${subsec.icon}`}
                                            ></use>
                                        </svg>
                                    </Link>
                                    <h2
                                        className={`text-center text-lg font-medium ${yatraOne.className}`}
                                    >
                                        {subsec.name}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="flex flex-col items-center px-24 space-y-4">
                    <h1
                        className={`text-2xl font-bold uppercase ${yatraOne.className}`}
                    >
                        Blogs
                    </h1>
                    <div className="w-full flex items-center px-6 py-4 rounded-xl border-2 border-[#2646531c]">
                        <div className="w-full flex-grow flex flex-col">
                            {blogs.map((blog, index) => (
                                <h2 className="text-lg" key={index}>
                                    {blog}
                                </h2>
                            ))}
                        </div>
                        <Link href={`/${props.lang}/blogs`}>
                            <svg className="w-10 h-10 p-2 button-icon-dark rounded-full border-2 border-[#2646531c]">
                                <use xlinkHref="#arrow-right"></use>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-center border-l-2 border-[#2646531c]">
                <h1
                    className={`text-2xl font-bold uppercase ${yatraOne.className}`}
                >
                    Verse of the day
                </h1>
                <div className="w-full flex flex-col items-center px-32 py-4 space-y-8">
                    <div
                        className={`w-full text-center p-4 text-xl rounded-xl bg-[#26465308] border-2 border-[#2646531c] ${yatraOne.className}`}
                    >
                        {verse.verse.map((part, index) => (
                            <h2 key={index}>{part}</h2>
                        ))}
                    </div>
                    <p className="hidden md:block w-full text-center text-[1.4rem] font-medium px-4 leading-10">
                        {/* {verse.meaning} */}
                        {dictionary["verse_meaning"]}
                    </p>
                    <div className="hidden md:flex w-full justify-evenly">
                        {verseIcons.map((icon, index) => (
                            <svg
                                className="w-14 h-14 p-3 border-2 border-[#2646531c] button-icon-light rounded-full"
                                key={index}
                            >
                                <use
                                    xlinkHref={`#${icon.icon}${
                                        icon.isActive ? "-filled" : ""
                                    }`}
                                ></use>
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
