"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCurrentChapterStore } from "@/stores";
import { getChapter } from "@/actions/chapter";

import { get_lang_num } from "@/lib/transformations";

import TitleBar from "../TitleBar";
import { Button } from "../ui/button";

interface Chapter {
  id: string;
  name: string;
  desc: string;
  sections: { id: string; title: string; chapter: string }[];
}

export default function Sections() {
  const router = useRouter();
  const params = useParams();
  const currentChId = useCurrentChapterStore((state) => state.chId);
  const [chapter, setChapter] = useState<Chapter | null>();

  useEffect(() => {
    getChapter(currentChId).then((res) => setChapter(res));
  }, [currentChId]);

  return (
    <>
      <TitleBar
        text={chapter?.name}
        secondaryText={`अध्याय ${get_lang_num(currentChId.slice(2))}`}
        className="px-16"
      />
      <div className="w-full h-[calc(100vh-12rem)] pt-4 px-16 flex flex-col items-center overflow-y-auto">
        {chapter?.sections?.map((section, index) => (
          <Button
            variant={"ghost"}
            key={index}
            className="w-full h-auto flex rounded-xl py-5 pl-2 pr-4 whitespace-normal"
            onClick={() =>
              router.push(
                `/${params.lang}/chapters/${section.id.slice(
                  4,
                  6
                )}?sec=${section.id.slice(7)}`
              )
            }
          >
            <p className="w-24 md:w-36 text-center text-[1.5rem] font-normal">
              {get_lang_num(section.id.slice(0, 2))} -{" "}
              {get_lang_num(section.id.slice(3))}
            </p>
            <div className="w-full flex flex-col items-start">
              <h3 className="text-lg text-left font-medium">{section.title}</h3>
            </div>
          </Button>
        ))}
      </div>
    </>
  );
}
