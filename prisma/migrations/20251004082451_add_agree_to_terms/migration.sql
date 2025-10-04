/*
  Warnings:

  - Added the required column `agreeToTerms` to the `UserRegistration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserRegistration" ADD COLUMN     "agreeToTerms" BOOLEAN NOT NULL;
