-- CreateTable
CREATE TABLE `UserCrops` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `cropId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `MarketPrice_name_state_idx` ON `MarketPrice`(`name`, `state`);

-- AddForeignKey
ALTER TABLE `UserCrops` ADD CONSTRAINT `UserCrops_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCrops` ADD CONSTRAINT `UserCrops_cropId_fkey` FOREIGN KEY (`cropId`) REFERENCES `Crops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
