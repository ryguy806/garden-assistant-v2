/*
  Warnings:

  - You are about to drop the column `plantProfileItemId` on the `NoteItem` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NoteItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entry" TEXT NOT NULL,
    "plantid" INTEGER NOT NULL,
    CONSTRAINT "NoteItem_plantid_fkey" FOREIGN KEY ("plantid") REFERENCES "PlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_NoteItem" ("date", "entry", "id", "plantid") SELECT "date", "entry", "id", "plantid" FROM "NoteItem";
DROP TABLE "NoteItem";
ALTER TABLE "new_NoteItem" RENAME TO "NoteItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
