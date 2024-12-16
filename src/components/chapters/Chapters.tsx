"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import { chaptersData } from "@/data/chaptersData";
import { type Locale } from "@/i18n-config";
import TitleBar from "../TitleBar";
import { Button } from "../ui/button";
import { transformNum } from "./functions";

import { useCurrentChapterStore } from "@/stores";

interface Props {
    params: {
        lang: Locale["code"];
    };
}

export default function Chapters(props: Props) {
    // const [currentChapterId, setCurrentChapterId] = useState("ch01");
    const [currentChapter, setCurrentChapter] = useState(chaptersData[0]);
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    const changeCurrentChapter = (chapterId: string) => {
        let newChapter = chaptersData.find((ch) => ch.id === chapterId);
        if (newChapter) {
            setCurrentChapter(newChapter);
        }
    };

    const [currentChapId, setCurrentChapId] = useCurrentChapterStore(
        (state) => [state.currentChapterId, state.setCurrentChapterId]
    );

    useEffect(() => {
        changeCurrentChapter(currentChapId);
    }, [currentChapId]);
    return (
        <div className="w-full flex pt-8">
            <div className="w-1/2 flex flex-col">
                <TitleBar backBtn={true} text="अध्याय" className="px-16" />
                <div className="w-full h-[calc(100vh-12rem)] pt-4 pb-4 px-16 flex flex-col items-start overflow-y-auto">
                    {chaptersData.map((chapter, index) => (
                        <Button
                            variant={"ghost"}
                            key={index}
                            className={`w-full h-auto flex rounded-xl py-5 pl-2 pr-4 whitespace-normal ${
                                currentChapter.id === chapter.id
                                    ? "bg-active pointer-events-none"
                                    : ""
                            }`}
                            onClick={() => setCurrentChapId(chapter.id)}
                        >
                            <p className="w-16 md:w-20 text-center text-[2rem]">
                                {transformNum(index + 1)}
                            </p>
                            <div className="w-full flex-grow flex flex-col items-start text-left">
                                <h3 className="w-full text-xl font-semibold">
                                    {chapter.name}
                                </h3>
                                <p className="w-full text-sm font-normal text-muted-foreground">
                                    {chapter.sectionsDesc}
                                </p>
                            </div>
                        </Button>
                    ))}
                </div>
            </div>
            <div className="w-1/2 flex flex-col border-l-2 border-border">
                <TitleBar
                    text={currentChapter.name}
                    secondaryText={`अध्याय ${transformNum(
                        parseInt(currentChapter.id.slice(2))
                    )}`}
                    className="px-16"
                />
                <div className="w-full h-[calc(100vh-12rem)] pt-4 px-16 flex flex-col items-center overflow-y-auto">
                    {currentChapter.sections.map((section, index) => (
                        <Button
                            // href={`/${params.lang}/chapters/${section.id.slice(
                            //     4,
                            //     6
                            // )}?${createQueryString(
                            //     "sec",
                            //     section.id.slice(7)
                            // )}`}
                            variant={"ghost"}
                            key={index}
                            className="w-full h-auto flex rounded-xl py-5 pl-2 pr-4 whitespace-normal"
                            onClick={() =>
                                router.push(
                                    `/${
                                        params.lang
                                    }/chapters/${section.id.slice(
                                        4,
                                        6
                                    )}?${createQueryString(
                                        "sec",
                                        section.id.slice(7)
                                    )}`
                                )
                            }
                        >
                            <p className="w-24 md:w-36 text-center text-[1.5rem] font-normal">
                                {transformNum(section.verses[0])} -{" "}
                                {transformNum(section.verses[1])}
                            </p>
                            <div className="w-full flex flex-col items-start">
                                <h3 className="text-lg text-left font-medium">
                                    {section.title}
                                </h3>
                            </div>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}
