// "use client";

import Sections from "@/components/sections";

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    a?: string;
  };
}

export default function Page({ params, searchParams }: Props) {
  console.log({ params, searchParams });
  return <Sections />;
}
