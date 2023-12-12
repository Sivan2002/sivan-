/*
  Warnings:

  - Added the required column `state` to the `MarketPrice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `MarketPrice` ADD COLUMN `state` VARCHAR(191) NOT NULL;
