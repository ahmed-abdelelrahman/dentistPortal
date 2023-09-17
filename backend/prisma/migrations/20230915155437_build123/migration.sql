-- AlterTable
ALTER TABLE `appointment` MODIFY `patientId` INTEGER NOT NULL DEFAULT 1,
    MODIFY `dentistInChargeId` INTEGER NOT NULL DEFAULT 1;
