"use client";

// import { useQueryState } from 'nuqs';
import { useCurrentChapterStore } from "@/stores";
import { Button } from "../ui/button";
import { get_lang_num } from "@/lib/transformations";

interface Props {
  chId: string;
  name: string;
  desc: string;
}

export default function Chapter(props: Props) {
  // const [chapter, setChapter] = useQueryState('chid', {defaultValue: 'ch01'})
  const [currentChId, setChId] = useCurrentChapterStore((state) => [
    state.chId,
    state.setChId,
  ]);

  return (
    <Button
      variant={"ghost"}
      // key={index}
      className={`w-full h-auto flex rounded-xl py-5 pl-2 pr-4 whitespace-normal ${
        currentChId === props.chId ? "bg-active pointer-events-none" : ""
      }`}
      onClick={() => setChId(props.chId)}
    >
      <p className="w-16 md:w-20 text-center text-[2rem]">
        {get_lang_num(props.chId.slice(2))}
      </p>
      <div className="w-full flex-grow flex flex-col items-start text-left">
        <h3 className="w-full text-xl font-semibold">{props.name}</h3>
        <p className="w-full text-sm font-normal text-muted-foreground">
          {props.desc}
        </p>
      </div>
    </Button>
  );
}
