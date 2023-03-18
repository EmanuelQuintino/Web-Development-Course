-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "birth" DATE NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "cep" VARCHAR(255) NOT NULL,
    "number" VARCHAR(255) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "district" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "uf" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "email" ON "students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "cpf" ON "students"("cpf");
