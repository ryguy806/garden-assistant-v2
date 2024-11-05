/*
  Warnings:

  - You are about to drop the column `notes` on the `PlantProfileItem` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NoteItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entry" TEXT NOT NULL,
    "plantid" INTEGER,
    CONSTRAINT "NoteItem_plantid_fkey" FOREIGN KEY ("plantid") REFERENCES "PlantProfileItem" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_NoteItem" ("date", "entry", "id") SELECT "date", "entry", "id" FROM "NoteItem";
DROP TABLE "NoteItem";
ALTER TABLE "new_NoteItem" RENAME TO "NoteItem";
CREATE TABLE "new_PlantProfileItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "plantedDate" DATETIME NOT NULL,
    "imageURL" TEXT,
    "name" TEXT NOT NULL,
    "garden" TEXT NOT NULL,
    "type" TEXT,
    "group" TEXT NOT NULL,
    "fertilizerNeeds" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    CONSTRAINT "PlantProfileItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlantProfileItem" ("createdDate", "details", "fertilizerNeeds", "garden", "group", "id", "imageURL", "name", "plantedDate", "type", "userId") SELECT "createdDate", "details", "fertilizerNeeds", "garden", "group", "id", "imageURL", "name", "plantedDate", "type", "userId" FROM "PlantProfileItem";
DROP TABLE "PlantProfileItem";
ALTER TABLE "new_PlantProfileItem" RENAME TO "PlantProfileItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
