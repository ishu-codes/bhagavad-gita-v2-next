-- CreateTable
CREATE TABLE "chapters" (
    "id" TEXT NOT NULL,
    "code" VARCHAR(5) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "desc" TEXT NOT NULL,
    "verses_count" SMALLINT NOT NULL,
    "lang" VARCHAR(3) NOT NULL,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sections" (
    "id" TEXT NOT NULL,
    "code" VARCHAR(5) NOT NULL,
    "title" TEXT NOT NULL,
    "chapter" VARCHAR(5) NOT NULL,
    "lang" VARCHAR(3) NOT NULL,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" TEXT NOT NULL,
    "code" VARCHAR(25) NOT NULL,
    "translation" TEXT NOT NULL,
    "meanings" JSONB NOT NULL,
    "section" VARCHAR(5) NOT NULL,
    "lang" VARCHAR(3) NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phrases" (
    "id" TEXT NOT NULL,
    "code" VARCHAR(7) NOT NULL,
    "num" VARCHAR(5) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "group" VARCHAR(25) NOT NULL,
    "script" VARCHAR(3) NOT NULL,

    CONSTRAINT "phrases_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chapters_name_key" ON "chapters"("name");

-- CreateIndex
CREATE UNIQUE INDEX "chapters_code_lang_key" ON "chapters"("code", "lang");

-- CreateIndex
CREATE UNIQUE INDEX "sections_code_lang_key" ON "sections"("code", "lang");

-- CreateIndex
CREATE INDEX "meanings" ON "groups"("meanings");

-- CreateIndex
CREATE UNIQUE INDEX "groups_code_lang_key" ON "groups"("code", "lang");

-- CreateIndex
CREATE INDEX "subverse" ON "phrases"("title");

-- CreateIndex
CREATE UNIQUE INDEX "phrases_code_script_key" ON "phrases"("code", "script");

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_chapter_fkey" FOREIGN KEY ("chapter") REFERENCES "chapters"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_section_fkey" FOREIGN KEY ("section") REFERENCES "sections"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "phrases" ADD CONSTRAINT "phrases_group_fkey" FOREIGN KEY ("group") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE RESTRICT;
