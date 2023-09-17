/*
  Warnings:

  - You are about to drop the column `age` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `sex` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the `case` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `note` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `procedure` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDay` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactNumber` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emergencyName` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emergencyNumber` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasAllergies` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identificationNo` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `case` DROP FOREIGN KEY `Case_patientId_fkey`;

-- DropForeignKey
ALTER TABLE `note` DROP FOREIGN KEY `Note_caseId_fkey`;

-- DropForeignKey
ALTER TABLE `procedure` DROP FOREIGN KEY `Procedure_caseId_fkey`;

-- AlterTable
ALTER TABLE `patient` DROP COLUMN `age`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `sex`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `birthDay` DATETIME(3) NOT NULL,
    ADD COLUMN `contactNumber` INTEGER NOT NULL,
    ADD COLUMN `emergencyName` VARCHAR(191) NOT NULL,
    ADD COLUMN `emergencyNumber` INTEGER NOT NULL,
    ADD COLUMN `gender` ENUM('MALE', 'FEMALE', 'NON_BINARY') NOT NULL,
    ADD COLUMN `hasAllergies` BOOLEAN NOT NULL,
    ADD COLUMN `identificationNo` INTEGER NOT NULL,
    ADD COLUMN `job` VARCHAR(191) NOT NULL,
    ADD COLUMN `notes` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `case`;

-- DropTable
DROP TABLE `note`;

-- DropTable
DROP TABLE `procedure`;

-- CreateTable
CREATE TABLE `Drug` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `generics` VARCHAR(191) NOT NULL,
    `brands` VARCHAR(191) NOT NULL,
    `dosages` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Drug_generics_key`(`generics`),
    UNIQUE INDEX `Drug_brands_key`(`brands`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Procdure` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Insurance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `contactNumber` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Insurance_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Payment_name_key`(`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patientSource` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appointment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reason` VARCHAR(191) NOT NULL,
    `patientId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `startTime` DATETIME(3) NOT NULL,
    `endTime` DATETIME(3) NOT NULL,
    `notes` VARCHAR(191) NOT NULL,
    `dentistInChargeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
