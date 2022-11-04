/*
  Warnings:

  - You are about to drop the `Pool` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[googleId]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "googleId" TEXT;

-- DropTable
DROP TABLE "Pool";

-- CreateIndex
CREATE UNIQUE INDEX "user_googleId_key" ON "user"("googleId");
