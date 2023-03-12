/*
  Warnings:

  - You are about to drop the column `photo_url` on the `products` table. All the data in the column will be lost.
  - Added the required column `expires_in` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link_image` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `photo_url`,
    ADD COLUMN `expires_in` DATE NOT NULL,
    ADD COLUMN `link_image` VARCHAR(255) NOT NULL;
