-- CreateTable
CREATE TABLE `MarketPrice` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `market` VARCHAR(191) NOT NULL,
    `min_price` VARCHAR(191) NOT NULL,
    `max_price` VARCHAR(191) NOT NULL,
    `modal_price` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
