-- DropIndex
DROP INDEX `Insurance_email_key` ON `insurance`;

-- AlterTable
ALTER TABLE `appointment` MODIFY `reason` VARCHAR(191) NOT NULL DEFAULT 'reason';
