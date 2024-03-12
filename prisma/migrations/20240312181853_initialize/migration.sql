/*
  Warnings:

  - Added the required column `name` to the `User2` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User2" ADD COLUMN     "name" TEXT NOT NULL;
