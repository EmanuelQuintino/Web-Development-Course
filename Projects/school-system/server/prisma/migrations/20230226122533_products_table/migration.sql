-- CreateTable
CREATE TABLE `products` (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `price_unit` DECIMAL(7, 2) NOT NULL,
    `quantity` INTEGER UNSIGNED NOT NULL,
    `expiration_date` DATE NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
