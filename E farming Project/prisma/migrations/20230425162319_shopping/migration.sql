-- CreateTable
CREATE TABLE `Shopping` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `producedBy` VARCHAR(191) NOT NULL,
    `sellerName` VARCHAR(191) NOT NULL,
    `sellerPhone` VARCHAR(191) NOT NULL,
    `sellerAddress` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
