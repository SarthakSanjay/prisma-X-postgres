-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "successorId" INTEGER,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_successorId_key" ON "Client"("successorId");

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_successorId_fkey" FOREIGN KEY ("successorId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
