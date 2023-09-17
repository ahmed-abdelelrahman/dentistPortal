/*
  Warnings:

  - A unique constraint covering the columns `[paymentName]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Payment_paymentName_key` ON `Payment`(`paymentName`);
