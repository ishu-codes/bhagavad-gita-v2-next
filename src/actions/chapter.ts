"use server";

import prisma from "@/lib/db";

export async function getChapter(chId: string) {
  return await prisma.chapter.findUnique({
    where: {
      id: chId,
    },
    include: {
      sections: true,
    },
  });
}
