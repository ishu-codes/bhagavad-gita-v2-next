"use server";

import { Locale } from "@/i18n-config";
import prisma from "@/lib/db";

export async function getChapter(chId: string, lang: Locale["code"]) {
  return await prisma.chapter.findFirst({
    where: {
      id: chId,
      lang: lang,
    },
    include: {
      sections: true,
    },
  });
}
