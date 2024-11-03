/*
  Warnings:

  - Added the required column `fertilizerNeeds` to the `PlantProfileItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group` to the `PlantProfileItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `PlantProfileItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plantedDate` to the `PlantProfileItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `PlantProfileItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlantProfileItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "plantedDate" DATETIME NOT NULL,
    "imageURL" TEXT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "fertilizerNeeds" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    CONSTRAINT "PlantProfileItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlantProfileItem_id_fkey" FOREIGN KEY ("id") REFERENCES "GardenMap" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlantProfileItem" ("createdDate", "details", "id", "imageURL", "name", "userId") SELECT "createdDate", "details", "id", "imageURL", "name", "userId" FROM "PlantProfileItem";
DROP TABLE "PlantProfileItem";
ALTER TABLE "new_PlantProfileItem" RENAME TO "PlantProfileItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
