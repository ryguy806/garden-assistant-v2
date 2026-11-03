/*
  Warnings:

  - Added the required column `plant_id` to the `PerenualPlantProfileItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AttractItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "species" TEXT NOT NULL,
    CONSTRAINT "AttractItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("plant_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AttractItem" ("id", "species") SELECT "id", "species" FROM "AttractItem";
DROP TABLE "AttractItem";
ALTER TABLE "new_AttractItem" RENAME TO "AttractItem";
CREATE UNIQUE INDEX "AttractItem_id_key" ON "AttractItem"("id");
CREATE TABLE "new_DimensionsItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "min_value" REAL NOT NULL,
    "max_value" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    CONSTRAINT "DimensionsItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("plant_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DimensionsItem" ("id", "max_value", "min_value", "type", "unit") SELECT "id", "max_value", "min_value", "type", "unit" FROM "DimensionsItem";
DROP TABLE "DimensionsItem";
ALTER TABLE "new_DimensionsItem" RENAME TO "DimensionsItem";
CREATE UNIQUE INDEX "DimensionsItem_id_key" ON "DimensionsItem"("id");
CREATE TABLE "new_HardinessItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    CONSTRAINT "HardinessItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("plant_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_HardinessItem" ("id", "max", "min") SELECT "id", "max", "min" FROM "HardinessItem";
DROP TABLE "HardinessItem";
ALTER TABLE "new_HardinessItem" RENAME TO "HardinessItem";
CREATE UNIQUE INDEX "HardinessItem_id_key" ON "HardinessItem"("id");
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
    "growth_rate" TEXT NOT NULL,
    "flowering_season" TEXT NOT NULL,
    CONSTRAINT "PerenualPlantProfileItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PerenualPlantProfileItem" ("common_name", "createdDate", "cycle", "default_image", "description", "flowering_season", "growth_rate", "id", "scientific_name", "soil", "sunlight", "type", "userId", "watering") SELECT "common_name", "createdDate", "cycle", "default_image", "description", "flowering_season", "growth_rate", "id", "scientific_name", "soil", "sunlight", "type", "userId", "watering" FROM "PerenualPlantProfileItem";
DROP TABLE "PerenualPlantProfileItem";
ALTER TABLE "new_PerenualPlantProfileItem" RENAME TO "PerenualPlantProfileItem";
CREATE UNIQUE INDEX "PerenualPlantProfileItem_plant_id_key" ON "PerenualPlantProfileItem"("plant_id");
CREATE TABLE "new_PestItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "species" TEXT NOT NULL,
    CONSTRAINT "PestItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("plant_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PestItem" ("id", "species") SELECT "id", "species" FROM "PestItem";
DROP TABLE "PestItem";
ALTER TABLE "new_PestItem" RENAME TO "PestItem";
CREATE UNIQUE INDEX "PestItem_id_key" ON "PestItem"("id");
CREATE TABLE "new_PruningMonthItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "month" TEXT NOT NULL,
    CONSTRAINT "PruningMonthItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("plant_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PruningMonthItem" ("id", "month") SELECT "id", "month" FROM "PruningMonthItem";
DROP TABLE "PruningMonthItem";
ALTER TABLE "new_PruningMonthItem" RENAME TO "PruningMonthItem";
CREATE UNIQUE INDEX "PruningMonthItem_id_key" ON "PruningMonthItem"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
