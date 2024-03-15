/*
  Warnings:

  - You are about to drop the column `nestedCommentId` on the `Comment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mainCommentId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_nestedCommentId_fkey";

-- DropIndex
DROP INDEX "Comment_nestedCommentId_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "nestedCommentId",
ADD COLUMN     "mainCommentId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Comment_mainCommentId_key" ON "Comment"("mainCommentId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_mainCommentId_fkey" FOREIGN KEY ("mainCommentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
