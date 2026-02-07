/*
  Warnings:

  - You are about to drop the `SunlightItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sunlight` to the `PerenualPlantProfileItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "SunlightItem_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SunlightItem";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PerenualPlantProfileItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "default_image" TEXT NOT NULL,
    "common_name" TEXT NOT NULL,
    "scientific_name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cycle" TEXT NOT NULL,
    "watering" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "soil" TEXT NOT NULL,
    "sunlight" TEXT NOT NULL,
    CONSTRAINT "PerenualPlantProfileItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PerenualPlantProfileItem" ("common_name", "createdDate", "cycle", "default_image", "description", "id", "scientific_name", "soil", "type", "userId", "watering") SELECT "common_name", "createdDate", "cycle", "default_image", "description", "id", "scientific_name", "soil", "type", "userId", "watering" FROM "PerenualPlantProfileItem";
DROP TABLE "PerenualPlantProfileItem";
ALTER TABLE "new_PerenualPlantProfileItem" RENAME TO "PerenualPlantProfileItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
