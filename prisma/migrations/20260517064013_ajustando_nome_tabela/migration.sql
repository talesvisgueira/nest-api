/*
  Warnings:

  - You are about to drop the `perfis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `testes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "perfis";

-- DropTable
DROP TABLE "testes";

-- DropTable
DROP TABLE "usuarios";

-- CreateTable
CREATE TABLE "TB_USUARIO" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "TB_USUARIO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_PERFIL" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TB_PERFIL_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_TESTE" (
    "id" DOUBLE PRECISION NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "TB_TESTE_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TB_USUARIO_email_key" ON "TB_USUARIO"("email");
