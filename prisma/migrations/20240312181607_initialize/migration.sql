-- CreateTable
CREATE TABLE "User2" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "User2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User2"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
