/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `UserRegistration` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `UserRegistration` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `UserRegistration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `UserRegistration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserRegistration" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserRegistration_email_key" ON "UserRegistration"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserRegistration_phone_key" ON "UserRegistration"("phone");
