/*
  Warnings:

  - You are about to drop the column `mainCommentId` on the `Comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_mainCommentId_fkey";

-- DropIndex
DROP INDEX "Comment_mainCommentId_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "mainCommentId",
ADD COLUMN     "parentId" INTEGER;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
