-- CreateTable
CREATE TABLE "chapters" (
    "pk" TEXT NOT NULL,
    "id" VARCHAR(5) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "desc" TEXT NOT NULL,
    "verses_count" SMALLINT NOT NULL,
    "lang" VARCHAR(3) NOT NULL,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "sections" (
    "pk" TEXT NOT NULL,
    "id" VARCHAR(5) NOT NULL,
    "title" TEXT NOT NULL,
    "range" VARCHAR(5) NOT NULL,
    "chId" TEXT NOT NULL,
    "lang" TEXT NOT NULL,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "groups" (
    "pk" TEXT NOT NULL,
    "id" VARCHAR(25) NOT NULL,
    "translation" TEXT NOT NULL,
    "meanings" JSONB NOT NULL,
    "secId" TEXT NOT NULL,
    "lang" TEXT NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "phrases" (
    "pk" TEXT NOT NULL,
    "id" VARCHAR(7) NOT NULL,
    "code" VARCHAR(5) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "groupId" VARCHAR(25) NOT NULL,
    "script" VARCHAR(3) NOT NULL,

    CONSTRAINT "phrases_pkey" PRIMARY KEY ("pk")
);

-- CreateIndex
CREATE UNIQUE INDEX "chapters_name_key" ON "chapters"("name");

-- CreateIndex
CREATE UNIQUE INDEX "chapters_id_lang_key" ON "chapters"("id", "lang");

-- CreateIndex
CREATE UNIQUE INDEX "sections_id_lang_key" ON "sections"("id", "lang");

-- CreateIndex
CREATE INDEX "meanings" ON "groups"("meanings");

-- CreateIndex
CREATE UNIQUE INDEX "groups_id_lang_key" ON "groups"("id", "lang");

-- CreateIndex
CREATE INDEX "subverse" ON "phrases"("title");

-- CreateIndex
CREATE UNIQUE INDEX "phrases_id_script_key" ON "phrases"("id", "script");

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_chId_lang_fkey" FOREIGN KEY ("chId", "lang") REFERENCES "chapters"("id", "lang") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_secId_lang_fkey" FOREIGN KEY ("secId", "lang") REFERENCES "sections"("id", "lang") ON DELETE CASCADE ON UPDATE RESTRICT;
