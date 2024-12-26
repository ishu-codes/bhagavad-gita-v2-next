// "use client";

// import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import { chaptersData } from "@/data/chaptersData";
import { type Locale } from "@/i18n-config";
import TitleBar from "../TitleBar";
import { Button } from "../ui/button";
import { transformNum } from "./functions";

import { useCurrentChapterStore } from "@/stores";
import prisma from "@/lib/db";
import Chapter from "./Chapter";
import Sections from "./Sections";

interface Props {
  // lang: Locale["code"];
}

export default async function Chapters(props: Props) {
  // const [currentChapterId, setCurrentChapterId] = useState("ch01");
  // const [currentChapter, setCurrentChapter] = useState(chaptersData[0]);
  // const router = useRouter();
  // const params = useParams();
  // const searchParams = useSearchParams();
  // const createQueryString = useCallback(
  //     (name: string, value: string) => {
  //         const params = new URLSearchParams(searchParams.toString());
  //         params.set(name, value);

  //         return params.toString();
  //     },
  //     [searchParams]
  // );

  // const changeCurrentChapter = (chapterId: string) => {
  //     let newChapter = chaptersData.find((ch) => ch.id === chapterId);
  //     if (newChapter) {
  //         setCurrentChapter(newChapter);
  //     }
  // };

  // const [currentChapId, setCurrentChapId] = useCurrentChapterStore(
  //     (state) => [state.currentChapterId, state.setCurrentChapterId]
  // );

  // useEffect(() => {
  //     changeCurrentChapter(currentChapId);
  // }, [currentChapId]);

  const chapters = await prisma.chapter.findMany();

  return (
    <div className="w-full flex pt-8">
      <div className="w-1/2 flex flex-col">
        <TitleBar backBtn={true} text="अध्याय" className="px-16" />
        <div className="w-full h-[calc(100vh-12rem)] pt-4 pb-4 px-16 flex flex-col items-start overflow-y-auto">
          {chapters.map((chapter, index) => (
            <Chapter
              chId={chapter.id}
              name={chapter.name}
              desc={chapter.desc}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="w-1/2 flex flex-col border-l-2 border-border">
        <Sections />
      </div>
    </div>
  );
}
