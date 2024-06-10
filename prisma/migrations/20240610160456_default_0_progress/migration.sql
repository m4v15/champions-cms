/*
  Warnings:

  - Made the column `progress` on table `gfms` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "gfms" ALTER COLUMN "progress" SET NOT NULL,
ALTER COLUMN "progress" SET DEFAULT 0;
