-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NoteItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entry" TEXT NOT NULL,
    "plantid" INTEGER NOT NULL,
    "plantProfileItemId" INTEGER,
    CONSTRAINT "NoteItem_plantProfileItemId_fkey" FOREIGN KEY ("plantProfileItemId") REFERENCES "PlantProfileItem" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_NoteItem" ("date", "entry", "id", "plantid") SELECT "date", "entry", "id", "plantid" FROM "NoteItem";
DROP TABLE "NoteItem";
ALTER TABLE "new_NoteItem" RENAME TO "NoteItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
