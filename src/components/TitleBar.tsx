"use client";

import { LeftArrow } from "@/icons/NavIcons";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface Props {
    text?: string | React.ReactNode;
    secondaryText?: string | React.ReactNode;
    backBtn?: boolean;
    className?: string;
}

export default function TitleBar(
    props: Props = {
        text: "",
        secondaryText: "",
        backBtn: false,
        className: "",
    }
) {
    const router = useRouter();
    return (
        <div
            className={`w-full flex items-center justify-between border-b-2 border-border ${props.className}`}
        >
            <Button
                variant={"ghost"}
                className={`min-w-6 h-auto p-1 rounded-full ${
                    props.backBtn ? "" : "opacity-0 -z-10"
                }`}
                onClick={() => router.back()}
            >
                <LeftArrow />
            </Button>
            <h2 className="text-2xl font-semibold">{props.text}</h2>
            <h3
                className={`min-w-6 text-xl ${
                    props.secondaryText ? "" : "opacity-0 -z-10"
                }`}
            >
                {props.secondaryText}
            </h3>
        </div>
    );
}
