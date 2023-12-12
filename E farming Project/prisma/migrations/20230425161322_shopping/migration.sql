-- CreateTable
CREATE TABLE `Fertilizers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `producedBy` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `benefits` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `crops` VARCHAR(191) NOT NULL,
    `formulation` VARCHAR(191) NOT NULL,
    `specilaRemarks` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Herbicides` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `producedBy` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `modeOfAction` VARCHAR(191) NOT NULL,
    `additionalInfo` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `crops` VARCHAR(191) NOT NULL,
    `weeds` VARCHAR(191) NOT NULL,
    `formulation` VARCHAR(191) NOT NULL,
    `timeOfApplication` VARCHAR(191) NOT NULL,
    `wayofApplication` VARCHAR(191) NOT NULL,
    `dosage` VARCHAR(191) NOT NULL,
    `specilaRemarks` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pesticides` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `producedBy` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `modeOfAction` VARCHAR(191) NOT NULL,
    `additionalInfo` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `crops` VARCHAR(191) NOT NULL,
    `weeds` VARCHAR(191) NOT NULL,
    `formulation` VARCHAR(191) NOT NULL,
    `timeOfApplication` VARCHAR(191) NOT NULL,
    `wayofApplication` VARCHAR(191) NOT NULL,
    `dosage` VARCHAR(191) NOT NULL,
    `specilaRemarks` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seeds` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `producedBy` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `additionalInfo` VARCHAR(191) NOT NULL,
    `breedingType` VARCHAR(191) NOT NULL,
    `cropFeatures` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `sowingMethod` VARCHAR(191) NOT NULL,
    `spacing` VARCHAR(191) NOT NULL,
    `variety` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `specilaRemarks` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
