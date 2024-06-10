-- Create Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "gfms" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "url" TEXT NOT NULL,
    "imageurl" TEXT,
    "title" TEXT,
    "progress" INTEGER,
    "target" INTEGER,

    CONSTRAINT "gfms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gfms_url_key" ON "gfms"("url");

-- CreateIndex
CREATE UNIQUE INDEX "gfms_imageurl_key" ON "gfms"("imageurl");

