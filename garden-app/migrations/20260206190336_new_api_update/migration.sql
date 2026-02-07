/*
  Warnings:

  - Made the column `type` on table `DimensionsItem` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DimensionsItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "min_value" REAL NOT NULL,
    "max_value" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    CONSTRAINT "DimensionsItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DimensionsItem" ("id", "max_value", "min_value", "type", "unit") SELECT "id", "max_value", "min_value", "type", "unit" FROM "DimensionsItem";
DROP TABLE "DimensionsItem";
ALTER TABLE "new_DimensionsItem" RENAME TO "DimensionsItem";
CREATE UNIQUE INDEX "DimensionsItem_id_key" ON "DimensionsItem"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
