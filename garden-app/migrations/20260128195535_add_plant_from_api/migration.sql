/*
  Warnings:

  - The primary key for the `ImageItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `ImageItem` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `ImageItem` table. All the data in the column will be lost.
  - You are about to drop the column `filename` on the `ImageItem` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `ImageItem` table. All the data in the column will be lost.
  - You are about to drop the column `mimeType` on the `ImageItem` table. All the data in the column will be lost.
  - You are about to drop the column `details` on the `PlantProfileItem` table. All the data in the column will be lost.
  - You are about to drop the column `fertilizerNeeds` on the `PlantProfileItem` table. All the data in the column will be lost.
  - You are about to drop the column `garden` on the `PlantProfileItem` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `PlantProfileItem` table. All the data in the column will be lost.
  - You are about to drop the column `imageURL` on the `PlantProfileItem` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `PlantProfileItem` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `PlantProfileItem` table. All the data in the column will be lost.
  - You are about to drop the column `plantedDate` on the `PlantProfileItem` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `PlantProfileItem` table. All the data in the column will be lost.
  - Added the required column `internal_id` to the `ImageItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plant_profile_id` to the `ImageItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scientific_name` to the `PlantProfileItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `PlantProfileItem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "FlowerImageFieldType" (
    "internal_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "copyright" TEXT,
    "imageItemId" INTEGER NOT NULL,
    CONSTRAINT "FlowerImageFieldType_imageItemId_fkey" FOREIGN KEY ("imageItemId") REFERENCES "ImageItem" ("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LeafImageFieldType" (
    "internal_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "copyright" TEXT,
    "imageItemId" INTEGER NOT NULL,
    CONSTRAINT "LeafImageFieldType_imageItemId_fkey" FOREIGN KEY ("imageItemId") REFERENCES "ImageItem" ("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HabitImageFieldType" (
    "internal_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "copyright" TEXT,
    "imageItemId" INTEGER NOT NULL,
    CONSTRAINT "HabitImageFieldType_imageItemId_fkey" FOREIGN KEY ("imageItemId") REFERENCES "ImageItem" ("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FruitImageFieldType" (
    "internal_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "copyright" TEXT,
    "imageItemId" INTEGER NOT NULL,
    CONSTRAINT "FruitImageFieldType_imageItemId_fkey" FOREIGN KEY ("imageItemId") REFERENCES "ImageItem" ("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BarkImageFieldType" (
    "internal_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "copyright" TEXT,
    "imageItemId" INTEGER NOT NULL,
    CONSTRAINT "BarkImageFieldType_imageItemId_fkey" FOREIGN KEY ("imageItemId") REFERENCES "ImageItem" ("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OtherImageFieldType" (
    "internal_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "copyright" TEXT,
    "imageItemId" INTEGER NOT NULL,
    CONSTRAINT "OtherImageFieldType_imageItemId_fkey" FOREIGN KEY ("imageItemId") REFERENCES "ImageItem" ("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DurationItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "duration" TEXT NOT NULL,
    "plant_profile_id" INTEGER NOT NULL,
    CONSTRAINT "DurationItem_plant_profile_id_fkey" FOREIGN KEY ("plant_profile_id") REFERENCES "PlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ImageItem" (
    "internal_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plant_profile_id" INTEGER NOT NULL,
    CONSTRAINT "ImageItem_plant_profile_id_fkey" FOREIGN KEY ("plant_profile_id") REFERENCES "PlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
DROP TABLE "ImageItem";
ALTER TABLE "new_ImageItem" RENAME TO "ImageItem";
CREATE UNIQUE INDEX "ImageItem_plant_profile_id_key" ON "ImageItem"("plant_profile_id");
CREATE TABLE "new_PlantProfileItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "common_name" TEXT,
    "scientific_name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "growth_habit" TEXT,
    "light" INTEGER,
    "image_url" TEXT,
    CONSTRAINT "PlantProfileItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlantProfileItem" ("createdDate", "id", "userId") SELECT "createdDate", "id", "userId" FROM "PlantProfileItem";
DROP TABLE "PlantProfileItem";
ALTER TABLE "new_PlantProfileItem" RENAME TO "PlantProfileItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "DurationItem_plant_profile_id_key" ON "DurationItem"("plant_profile_id");
