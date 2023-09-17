-- AlterTable
ALTER TABLE `appointment` MODIFY `date` VARCHAR(191) NOT NULL,
    MODIFY `dentistInChargeId` INTEGER NOT NULL DEFAULT 0;
