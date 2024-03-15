-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "nestedCommentId" INTEGER,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comment_nestedCommentId_key" ON "Comment"("nestedCommentId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_nestedCommentId_fkey" FOREIGN KEY ("nestedCommentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
