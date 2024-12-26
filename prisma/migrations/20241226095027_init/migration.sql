-- CreateTable
CREATE TABLE "chapters" (
    "id" VARCHAR(5) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "desc" TEXT NOT NULL,
    "verses_count" SMALLINT NOT NULL,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sections" (
    "id" VARCHAR(5) NOT NULL,
    "title" TEXT NOT NULL,
    "chapter" VARCHAR(5) NOT NULL,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" VARCHAR(25) NOT NULL,
    "translation" TEXT NOT NULL,
    "meanings" JSONB NOT NULL,
    "section" VARCHAR(5) NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phrases" (
    "id" VARCHAR(7) NOT NULL,
    "code" VARCHAR(5) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "group" VARCHAR(25) NOT NULL,

    CONSTRAINT "phrases_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chapters_name_key" ON "chapters"("name");

-- CreateIndex
CREATE INDEX "meanings" ON "groups"("meanings");

-- CreateIndex
CREATE INDEX "subverse" ON "phrases"("title");

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_chapter_fkey" FOREIGN KEY ("chapter") REFERENCES "chapters"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_section_fkey" FOREIGN KEY ("section") REFERENCES "sections"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "phrases" ADD CONSTRAINT "phrases_group_fkey" FOREIGN KEY ("group") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE RESTRICT;
