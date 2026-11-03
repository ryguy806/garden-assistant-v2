/*
  Warnings:

  - Added the required column `maintenance` to the `PerenualPlantProfileItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PerenualPlantProfileItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plant_id" INTEGER NOT NULL,
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
    "maintenance" TEXT NOT NULL,
    "growth_rate" TEXT NOT NULL,
    "flowering_season" TEXT NOT NULL,
    CONSTRAINT "PerenualPlantProfileItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PerenualPlantProfileItem" ("common_name", "createdDate", "cycle", "default_image", "description", "flowering_season", "growth_rate", "id", "plant_id", "scientific_name", "soil", "sunlight", "type", "userId", "watering") SELECT "common_name", "createdDate", "cycle", "default_image", "description", "flowering_season", "growth_rate", "id", "plant_id", "scientific_name", "soil", "sunlight", "type", "userId", "watering" FROM "PerenualPlantProfileItem";
DROP TABLE "PerenualPlantProfileItem";
ALTER TABLE "new_PerenualPlantProfileItem" RENAME TO "PerenualPlantProfileItem";
CREATE UNIQUE INDEX "PerenualPlantProfileItem_userId_plant_id_key" ON "PerenualPlantProfileItem"("userId", "plant_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
