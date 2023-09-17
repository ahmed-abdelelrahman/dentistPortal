/*
  Warnings:

  - You are about to drop the column `name` on the `payment` table. All the data in the column will be lost.
  - Added the required column `id` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentName` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Payment_name_key` ON `payment`;

-- AlterTable
ALTER TABLE `payment` DROP COLUMN `name`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `paymentName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
