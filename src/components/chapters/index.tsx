import prisma from "@/lib/db";
import Chapter from "./Chapter";
import Sections from "./Sections";
import TitleBar from "../TitleBar";
import { Locale } from "@/i18n-config";

export default async function Chapters({ lang }: { lang: Locale["code"] }) {
  const chapters = await prisma.chapter.findMany({
    where: {
      lang: lang,
    },
  });

  return (
    <div className="w-full flex pt-8">
      <div className="w-1/2 flex flex-col">
        <TitleBar backBtn={true} text="अध्याय" className="px-16" />
        <div className="w-full h-[calc(100vh-12rem)] pt-4 pb-4 px-16 flex flex-col items-start overflow-y-auto">
          {chapters.map((chapter, index) => (
            <Chapter
              chId={chapter.code}
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
