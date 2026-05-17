/*
  Warnings:

  - The primary key for the `testes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "testes" DROP CONSTRAINT "testes_pkey",
ALTER COLUMN "id" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "testes_pkey" PRIMARY KEY ("id");
