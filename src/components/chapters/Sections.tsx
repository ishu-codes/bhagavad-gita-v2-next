"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { chaptersData } from "@/data/chaptersData";
import TitleBar from "../TitleBar";
import { Button } from "../ui/button";
import { transformNum } from "./functions";

interface SectionInterface {
    id: string;
    verses: number[];
    title: string;
}
export default function Sections() {
    const [currentChapter, setCurrentChapter] = useState(chaptersData[0]);
    const [currentSection, setCurrentSection] = useState<SectionInterface>(
        chaptersData[0].sections[0]
    );
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();

    // const createQueryString = useCallback(
    //     (name: string, value: string) => {
    //         const params = new URLSearchParams(searchParams.toString());
    //         params.set(name, value);

    //         return params.toString();
    //     },
    //     [searchParams, router]
    // );

    const changeCurrentSection = (secId: string) => {
        const chapterId = `ch${params.chId}`;
        let newChapter = chaptersData.find((ch) => ch.id === chapterId);
        if (newChapter) {
            setCurrentChapter(newChapter);
        } else {
            return;
        }
        const sectionId = `sec-${newChapter.id.slice(2)}-${secId}`;
        let newSection = newChapter.sections.find(
            (sec) => sec.id === sectionId
        );
        if (newSection) {
            setCurrentSection(newSection);
        }
    };

    useEffect(() => {
        const secId = searchParams.get("sec");
        changeCurrentSection(secId || `sec-${params.chId.slice(2)}-01`);
    }, [searchParams]);
    return (
        <div className="w-full flex pt-8">
            <div className="w-1/2 flex flex-col">
                <TitleBar
                    backBtn={true}
                    text={currentChapter.name}
                    secondaryText={`अध्याय ${transformNum(
                        parseInt(currentChapter.id.slice(2))
                    )}`}
                    className="px-16"
                />
                <div className="w-full h-[calc(100vh-12rem)] pt-4 pb-4 px-16 flex flex-col items-start overflow-y-auto">
                    {currentChapter.sections.map((section, index) => (
                        <Button
                            variant={"ghost"}
                            key={index}
                            className={`w-full h-auto flex rounded-xl py-5 pl-2 pr-4 whitespace-normal ${
                                currentSection?.id === section.id
                                    ? "bg-active pointer-events-none"
                                    : ""
                            }`}
                            onClick={() => {
                                router.replace(`?sec=${section.id.slice(7)}`);
                            }}
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
            <div className="w-1/2 flex flex-col border-l-2 border-border">
                <TitleBar
                    text={""}
                    secondaryText={`अध्याय ${transformNum(
                        parseInt(currentChapter.id.slice(2))
                    )}`}
                    className="px-16"
                />
                <div className="w-full h-[calc(100vh-12rem)] pt-4 px-16 flex flex-col items-center overflow-y-auto">
                    {currentChapter.sections.map((section, index) => (
                        <Button
                            variant={"ghost"}
                            // href={`?a=${section.id}`}
                            key={index}
                            className="w-full h-auto flex rounded-xl py-5 pl-2 pr-4 whitespace-normal"
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
