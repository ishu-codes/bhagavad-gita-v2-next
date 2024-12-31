"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCurrentChapterStore } from "@/stores";
import { getChapter } from "@/actions/chapter";
import { Locale } from "@/i18n-config";

import { getNumerals } from "@/lib/transformations";

import TitleBar from "../TitleBar";
import { Button } from "../ui/button";
// import { getDictionary } from "@/get-dictionary";

interface Chapter {
  pk: string;
  id: string;
  name: string;
  desc: string;
  verses_count: number;
  lang: string;
  sections: {
    pk: string;
    id: string;
    title: string;
    range: string;
    chId: string;
    lang: string;
  }[];
}

export default function Sections({ lang }: { lang: Locale["code"] }) {
  const router = useRouter();
  const params = useParams();
  const currentChId = useCurrentChapterStore((state) => state.chId);
  const [chapter, setChapter] = useState<Chapter | null>();
  const [numerals, setNumerals] = useState<string[]>([]);

  const getLangNum = (num: number | string) => {
    let result_num = "";
    for (let n of `${num}`.replace(/^0*/, "")) {
      result_num += numerals[parseInt(n)];
    }
    return result_num;
  };

  useEffect(() => {
    getChapter(currentChId, lang).then((res) => {
      setChapter(res);
    });
    getNumerals(lang).then((res) => setNumerals(res));
  }, [currentChId, lang]);

  return (
    <>
      <TitleBar
        text={chapter?.name}
        secondaryText={`अध्याय ${getLangNum(currentChId.slice(2))}`}
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
              {getLangNum(section.range.slice(0, 2))} -{" "}
              {getLangNum(section.range.slice(3))}
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
