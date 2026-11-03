/*
  Warnings:

  - A unique constraint covering the columns `[userId,plant_id]` on the table `PerenualPlantProfileItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `plantProfileId` to the `AttractItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plantProfileId` to the `DimensionsItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plantProfileId` to the `HardinessItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plantProfileId` to the `PestItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plantProfileId` to the `PruningMonthItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "PerenualPlantProfileItem_plant_id_key";

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AttractItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plantProfileId" INTEGER NOT NULL,
    "species" TEXT NOT NULL,
    CONSTRAINT "AttractItem_plantProfileId_fkey" FOREIGN KEY ("plantProfileId") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AttractItem" ("id", "species") SELECT "id", "species" FROM "AttractItem";
DROP TABLE "AttractItem";
ALTER TABLE "new_AttractItem" RENAME TO "AttractItem";
CREATE TABLE "new_DimensionsItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plantProfileId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "min_value" REAL NOT NULL,
    "max_value" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    CONSTRAINT "DimensionsItem_plantProfileId_fkey" FOREIGN KEY ("plantProfileId") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DimensionsItem" ("id", "max_value", "min_value", "type", "unit") SELECT "id", "max_value", "min_value", "type", "unit" FROM "DimensionsItem";
DROP TABLE "DimensionsItem";
ALTER TABLE "new_DimensionsItem" RENAME TO "DimensionsItem";
CREATE TABLE "new_HardinessItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plantProfileId" INTEGER NOT NULL,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    CONSTRAINT "HardinessItem_plantProfileId_fkey" FOREIGN KEY ("plantProfileId") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_HardinessItem" ("id", "max", "min") SELECT "id", "max", "min" FROM "HardinessItem";
DROP TABLE "HardinessItem";
ALTER TABLE "new_HardinessItem" RENAME TO "HardinessItem";
CREATE UNIQUE INDEX "HardinessItem_plantProfileId_key" ON "HardinessItem"("plantProfileId");
CREATE TABLE "new_PestItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plantProfileId" INTEGER NOT NULL,
    "species" TEXT NOT NULL,
    CONSTRAINT "PestItem_plantProfileId_fkey" FOREIGN KEY ("plantProfileId") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PestItem" ("id", "species") SELECT "id", "species" FROM "PestItem";
DROP TABLE "PestItem";
ALTER TABLE "new_PestItem" RENAME TO "PestItem";
CREATE TABLE "new_PruningMonthItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plantProfileId" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    CONSTRAINT "PruningMonthItem_plantProfileId_fkey" FOREIGN KEY ("plantProfileId") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PruningMonthItem" ("id", "month") SELECT "id", "month" FROM "PruningMonthItem";
DROP TABLE "PruningMonthItem";
ALTER TABLE "new_PruningMonthItem" RENAME TO "PruningMonthItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "PerenualPlantProfileItem_userId_plant_id_key" ON "PerenualPlantProfileItem"("userId", "plant_id");
