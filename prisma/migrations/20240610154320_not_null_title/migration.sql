/*
  Warnings:

  - Made the column `imageurl` on table `gfms` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `gfms` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "gfms" ALTER COLUMN "imageurl" SET NOT NULL,
ALTER COLUMN "title" SET NOT NULL;
