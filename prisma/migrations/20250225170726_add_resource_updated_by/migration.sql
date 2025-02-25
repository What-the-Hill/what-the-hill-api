/*
  Warnings:

  - Added the required column `updatedBy` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `Legislator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `Stage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `Status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bill" ADD COLUMN     "updatedBy" TEXT;
UPDATE "Bill" SET "updatedBy" = 'migration';
ALTER TABLE "Bill" ALTER COLUMN     "updatedBy" SET NOT NULL;

-- AlterTable
ALTER TABLE "Legislator" ADD COLUMN     "updatedBy" TEXT;
UPDATE "Legislator" SET "updatedBy" = 'migration';
ALTER TABLE "Legislator" ALTER COLUMN     "updatedBy" SET NOT NULL;

-- AlterTable
ALTER TABLE "Stage" ADD COLUMN     "updatedBy" TEXT;
UPDATE "Stage" SET "updatedBy" = 'migration';
ALTER TABLE "Stage" ALTER COLUMN     "updatedBy" SET NOT NULL;

-- AlterTable
ALTER TABLE "Status" ADD COLUMN     "updatedBy" TEXT;
UPDATE "Status" SET "updatedBy" = 'migration';
ALTER TABLE "Status" ALTER COLUMN     "updatedBy" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "updatedBy" TEXT;
UPDATE "User" SET "updatedBy" = 'migration';
ALTER TABLE "User" ALTER COLUMN     "updatedBy" SET NOT NULL;
